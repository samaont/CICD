import express from 'express'
const app = express()
const port = 3000

function react(req, res){
    console.log("React function hasbeen called!")
    console.log("after circleci")
    res.send('Hello World!');

}

app.get('/recipes', (req, res) => {
  const recipes = [
    { id: 1, name: 'שקשוקה', ingredients: ['ביצים', 'עגבניות', 'תיבול'] },
    { id: 2, name: 'פסטה', ingredients: ['פסטה', 'רוטב פסטו'] },
    { id: 3, name: 'מרק ירקות', ingredients: ['גזר', 'תפוח אדמה', 'בצל'] },
  ];
  res.json(recipes);
});

app.get('/', react)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
