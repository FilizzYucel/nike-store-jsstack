import React from 'react'
import Item from './utils/Item'
import Title from './utils/Title'


const Sales = ({ ifExists, endpoint: { title, items } }) => {
  // console.log(endpoint)

  // // denemeee
  // const [foods,setFoods] = useState(data);
  // //Filter type 
  // const filterType = (category) => {
  //   setFoods(
  //     data.filter((category) => {
  //       return item.category === category;
  //     })
  //   );
  // };



  return (
    <>
      {/* denemeee
      <div className='max-w-[1640px] m-auto px-4 py-12  ' >

         {/*  Filter Row  
        <div className=' flex flex-col lg:flex-row justify-between ' >
          {/* fİLTER TYPE 
          
          <div className='font-bold text-gray-700 ' >
            <p>Filter Type</p>
            <div className='flex justify-between flex-wrap ' >
              <button onClick={() => setFoods(data)} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  ' >Tümü</button>
              <button onClick={() => filterType('Beyaz Peynirler')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Beyaz Peynirler</button>
              <button onClick={() => filterType('Kaşar Peynirler')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Kaşar Peynirler</button>
              <button onClick={() => filterType('Tost Peynirleri')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Tost Peynirleri</button>
              <button onClick={() => filterType('Süzme Peynirler')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Süzme Peynirler</button>
              <button onClick={() => filterType('Sürülebilir Peynirler')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Sürülebilir Peynirler</button>
              <button onClick={() => filterType('Yöresel Peynirler')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Yöresel Peynirler</button>
              <button onClick={() => filterType('Mozzarella')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Mozzarella</button>
              <button onClick={() => filterType('Eğlenceli Peynirler')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Eğlenceli Peynirler</button>
              <button onClick={() => filterType('Gurme Peynirler')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Gurme Peynirler</button>
              <button onClick={() => filterType('Laktozsuz Peynirler')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Laktozsuz Peynirler</button>
            </div>
          </div>
        </div>
      </div> */}


      <div className='nike-container'>
        <Title title={title} />
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
          {items?.map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Sales