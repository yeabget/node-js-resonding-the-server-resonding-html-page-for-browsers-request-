const express = require('express');
const app = express();
const blogs=[{title:"Abebe",desc:"this is abebe from health care management"},
    {title:"Kebede",desc:"this is kebede from ethio telecom"},
    {title:"Alemitu",desc:'this is alemitu from ethiopian electricity coporation'}

]
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { 
        title: "Home",
        blogs  
    });
});

app.get('/about', (req, res) => {
    res.render('about',{title:"about"});
});
app.get('/contact',(req,res)=>{
    res.render('contact',{title:"contact"});
});
app.use((req, res) => {
    res.status(404).render('404',{title:"error"});
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});