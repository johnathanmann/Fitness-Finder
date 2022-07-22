const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f7e67ce4d6msh8eac922e7a9ef02p170572jsnd8c44fa6c510',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/neck', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    