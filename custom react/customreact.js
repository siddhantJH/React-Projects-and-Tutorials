

//give react element and gve container on which we need to inject 
function customRender(reactElement,mainContainer){
    //create dom element 
    // const domElement=document.createElement(reactElement.type) //elements created so we need to insert
    // domElement.innerHTML=reactElement.children
    // //this below approach is not good so use loop based code
    // domElement.setAttribute('href',reactElement.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // mainContainer.appendChildern(domElement)

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    //adding attributes one by one using the floop 
    for (const prop in reactElement.props)
        {
            //sometimes people used to give children inside the props so ignore all of that 
            if(prop == 'children') continue;
            domElement.setAttribute(prop,reactElement.props[prop])   //jitne bhi attributs hai sabko set karna hai 
        }
        mainContainer.appendChild(domElement)
}
    

//Make an cust react element in terms of object 
//function ne jo element return kiya hai react usko compile karene ke bad kaise dekhta hai 
//har element ki tree banane ki koshish karta hai react 
//below react creates the object 
//end of the all element is evaluated like this , har element ka tree graph bante reheta hai 
const reactElement={     
    type: 'a',
    props: {
        href:'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit google'
}  //this works is done by react under the hood 




const mainContainer = document.querySelector('#root')

//now we need to render a tag means inject it inside the root so we need to create a method for it 
customRender(reactElement,mainContainer) //now we need to make a custom render method , it expects two things what to inject and where 






