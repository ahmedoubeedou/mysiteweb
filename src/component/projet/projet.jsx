import Cards from "./Card";
export default function Projet()
{
     //================ debut photo  =====================
     const climat = "/src/assets/photoprojet/clima.jpg";
     const todo = "/src/assets/photoprojet/todos.jpg";
     const idaret = "/src/assets/photoprojet/idaret.jpg";
     const bilan = "/src/assets/photoprojet/bilan.jpg";
     const xo = "/src/assets/photoprojet/xo1.jpg";
     //================ fin photo  =====================
       //================ debut link  =====================
     const xo_github = "https://ahmedoubeedou.github.io/react-xo/";
     const todo_github = "https://ahmedoubeedou.github.io/todolist/";
     const idaret_github = "https://ahmedoubeedou.github.io/idaretsilae/";
     const bilan_github = "https://ahmedoubeedou.github.io/bilan/";
     const cilmat_github = "https://ahmedoubeedou.github.io/climatville/";
     //================ fin photo  =====================
    return(
        <div className="projet-parent" id="Project">
            <h2 className="text-shadow-white text-4xl text-center title">My Project </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-2  gap-0.5 items-center  parent">
  <Cards srcs={xo} hrefs={xo_github} />
    <Cards srcs={climat} hrefs={cilmat_github}/>
    <div className="div-todo-git">
        <Cards srcs={todo}  hrefs={todo_github}/>
    </div>
   
        <Cards srcs={idaret} hrefs={idaret_github}/>
  
    <Cards srcs={bilan} hrefs={bilan_github}/>
    <Cards srcs={climat} hrefs={cilmat_github}/>
</div>
        </div>
    );
}