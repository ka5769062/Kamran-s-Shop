import React from 'react'
import Image from "next/image";

const Survey = () => {
  return (
        <div className='container pt-40'> 

      <div className='grid lg:grid-cols-[50%,1fr] gap-20'>
          <div>
           <Image
           className='w-[100%] h-auto lg:w-auto lg:h-[90vh]'
           src="/survey.png"
           width={1000}
           height={600}
           />
          </div>
 
       <div className='self-center'>
        <h2 className='text-4xl md:text-6xl font-bold'>Survey</h2>
        <h2 className='text-4xl md:text-6xl font-bold pt-3'>About Our
            <span className='text-accent pl-3'>Food</span>
        </h2>
<p className='text-gray-700 pt-16'>
quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione  
<br/>
<br/>
sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
</p>




       </div>














      </div>










    </div>
  )
}

export default Survey