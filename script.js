              // Load saved progress from localStorage when the page loads
              window.onload = function () {
                  loadProgress();
              };

              // Function to update hours and save to localStorage
              function updateHours(id, value) {
                  document.getElementById(id).textContent = value;
                  localStorage.setItem(id, value);
              }

              // Function to increment paper count and save to localStorage
              function incrementPaper(id) {
                  let count = parseInt(localStorage.getItem(id) || 0);
                  count += 1;
                  document.getElementById(id).textContent = count;
                  localStorage.setItem(id, count);
              }

              // Load saved values from localStorage
              function loadProgress() {
                  let elements = [
                      // William's progress
                      "math1", "physics1", "chemistry1",
                      "paper1a_math1", "paper1b_math1", "paper2_math1",
                      "paper1a_physics1", "paper1b_physics1", "paper2_physics1",
                      "paper1a_chemistry1", "paper1b_chemistry1", "paper2_chemistry1",

                      // Jack's progress
                      "math2", "physics2", "chemistry2",
                      "paper1a_math2", "paper1b_math2", "paper2_math2",
                      "paper1a_physics2", "paper1b_physics2", "paper2_physics2",
                      "paper1a_chemistry2", "paper1b_chemistry2", "paper2_chemistry2"
                  ];

                  elements.forEach(id => {
                      let savedValue = localStorage.getItem(id);
                      if (savedValue !== null) {
                          document.getElementById(id).textContent = savedValue;
                          let inputElement = document.querySelector(`input[oninput*="${id}"]`);
                          if (inputElement) {
                              inputElement.value = savedValue;
                          }
                      }
                  });
              }
