 const screen = document.querySelector(".display");
      const allButtons = document.querySelectorAll("button");
      let memory = "";

      //---Function to listen every click----
      allButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const choice = btn.innerText;
          btn.blur();

          // --- CASE A:(AC) ---
          if (choice === "AC") {
            memory = "";
            screen.innerText = "0";
          }

          // --- CASE B: The "Oops" (Delete Icon) ---
          // We check if the button has that delete icon inside it
          else if (btn.innerHTML.includes("fa-delete-left")) {
            memory = memory.slice(0, -1); // Remove the last character
            screen.innerText = memory || "0";
          }

          // --- CASE C: The "Result" (=) ---
          else if (choice === "=") {
            try {
              // 1. It use memory, NOT screen.innerHTML
              // 2. Replace 'x' with '*' so math works
              let mathProblem = memory.replace(/x/g, "*");

              let answer = eval(mathProblem);

              screen.innerText = answer;
              memory = answer.toString(); // Update memory with the result
            } catch (error) {
              screen.innerText = "Error";
              memory = "";
            }
          }

          // --- CASE D: Just typing numbers or symbols ---
          else {
            //Get the last character we typed
            const lastChar = memory.slice(-1);

            //Define what we consider "operators"
            const operators = ["+", "-", "x", "/", "%"];
            if (operators.includes(choice) && operators.includes(lastChar)) {
              // Remove the old operator and add the new one
              memory = memory.slice(0, -1) + choice;
            }
            //don't let the user start the math with an operator (except minus)
            else if (
              memory === "" &&
              operators.includes(choice) &&
              choice !== "-"
            ) {
              return;
            }
            //add the character normally
            else {
              if (memory === "" && (choice === "0" || choice === "00")) return;
              memory += choice;
            }

            screen.innerText = memory;
          }
        });
      });

      // Listen for keys being pressed on our physical keyboard
      window.addEventListener("keydown", (event) => {
        const key = event.key; // This captures exactly what you typed

        // 1. If it's a number or a basic math symbol
        if (
          (key >= "0" && key <= "9") ||
          ["+", "-", "*", "/", ".", "%"].includes(key)
        ) {
          // If screen is "0", replace it. Otherwise, add to it.
          if (memory === "0") {
            memory = key;
          } else {
            memory += key;
          }
          screen.innerText = memory;
        }

        // 2. If you hit 'Enter', calculate the answer
        if (key === "Enter") {
          try {
            // We use our same math logic from the "=" button
            let result = eval(memory.replace(/x/g, "*").replace(/%/g, "/100"));
            screen.innerText = result;
            memory = result.toString();
          } catch {
            screen.innerText = "Error";
            memory = "";
          }
        }

        // 3. If you hit 'Backspace', delete the last character
        if (key === "Backspace") {
          memory = memory.slice(0, -1);
          screen.innerText = memory || "0";
        }

        // 4. If you hit 'Escape', clear everything (AC)
        if (key === "Escape") {
          memory = "";
          screen.innerText = "0";
        }
      });