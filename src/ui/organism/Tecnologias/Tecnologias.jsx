
import './Tecnologias.css'
import { Cards } from '../../molecules/Cards/Cards'


export const Tecnologias = () => {
  return (
    <>
    <h3 className='Title'>Tecnologias</h3>
    <div className="Tecnologias-box">
        <Cards title='Flutter' img="https://user-images.githubusercontent.com/51419598/152648731-567997ec-ac1c-4a9c-a816-a1fb1882abbe.png" />
        <Cards title='Dart' img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Dart-logo-icon.svg/2048px-Dart-logo-icon.svg.png" />
        <Cards title='React' img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
        <Cards title='Node' img="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" />
        <Cards title='MongoDB' img="https://img.icons8.com/color/480/mongodb.png" />
        <Cards title='Firebase' img="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" />
        <Cards title='MySQL' img="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" />
        <Cards title='Git' img="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />
        <Cards title='HTML' img="https://cdn-icons-png.flaticon.com/512/732/732212.png" />
        <Cards title='CSS' img="https://icons.iconarchive.com/icons/martz90/hex/512/css-3-icon.png" />
        <Cards title='JavaScript' img="https://icons-for-free.com/iconfiles/png/512/command+develop+javascript+language+programming+software+icon-1320165727225308896.png" />
        <Cards title='TypeScript' img="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
        <Cards title='PL/SQL' img="https://downloadly.net/wp-content/uploads/2020/03/PLSQL-Developer.png" />
    </div>
    </>
  )
}
