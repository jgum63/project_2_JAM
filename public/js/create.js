const newFormHandler = async (event) => {
    event.preventDefault();
  // name sets reps day difficulty_id
    let name = document.querySelector('#routine-name').value.trim();
    let sets = document.querySelector('#sets').value.trim(); // needs to be a number
    let reps = document.querySelector('#reps').value.trim(); // needs number
    let day = document.querySelector('#day').value.trim(); // needs number
    // 1=beg 2=int 3=adv
    let difficulty_id = document.querySelector('#difficulty').value.trim(); // needs number
// day = parseInt(day)
  
// this is a conditional to check if all values were provided
    if (name && sets && reps && parseInt(day) && difficulty_id) {
      const response = await fetch(`/api/workouts`, {
        method: 'POST',
        body: JSON.stringify({ name, sets, reps, day, difficulty_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create routine');
      }
    }
  };

  document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);
