import Image from 'next/image';
import { GiConsoleController } from 'react-icons/gi';

const post_info = {
  title: "The beginner's pitfalls of programming, accompanied by examples in Python.",
  date: "27.06.2022",
}


export default function Blog() {
    
  return (
    <>

      <div className='mt-16 p-6 place-content-center flex'>
        
        <div className="p-6 max-w-screen-lg content-center justify-center">

          <h1 className="text-5xl underline decoration-wavy decoration-stone-500 text-white">
            {post_info.title} <br/>
            
          </h1>

          <div className="text-2xl p-6">
             programming isn't all fun and games. <GiConsoleController /> 
          </div>

          <p className="leading-loose tracking-wide text-xl text-cyan-50">
            Whew, you just started programming, congrats! It's all gonna be so easy
            and fun and games... WRONG! Throw away the baby program you just made. 
            What did it do? Count to 10? Print out a pyramid? pffft! Real programming 
            is hard with memory and algorithms and COMP2017 and you haven't started programming 
            until you've cried in the shower.
            A good teacher will never stop you from crying in the shower, he/she will simply
            let you know why you are crying in the shower and it's up to you to stop crying 
            and fix your bugs.
            <br />
            <br />
            That being said, this is a guide into
            identifying why you <i>will</i> be cry down the road in programming and hopefully 
            make your life a bit easier!
            <br />
            <br />

            <h1 className="text-4xl underline decoration-stone-500 text-white">
              Part 1: Passing by reference vs passing by value.
            </h1>
            <br />

            Say you have a massive stone tablet in the middle of a deserted island, and you have
            to pass this information to a bunch of archaeologists. What can you do?
            <br />
            <br />

            Well, there are 2 options, you can get a piece of paper and copy down the contents of the
            stone tablet and send 1 to every archaeologists, or, you could send every archaeologists a 
            location of the stone table and get them to come and have a look at it themselves.
            <br />
            <br />

            This is the difference between passing by value and passing by reference. In the prior, you make 
            a duplicate of the information and hand that over, whereas in the latter, you pass simply where the 
            location of the information is.
            <br />
            <br />
            
            Processing in the form of calculations and arithmatics is very very fast in a computer, but loading 
            information to be processed can be quite slow. If we pass by value, we have to load the 
            information into the processor register, and copy the value from the register back into a 
            different memory location. For large pieces of data, this can easily take multiple cycles
            and is very slow. Passing by reference on the other hand always copies over a very small piece 
            of information into another area of memory, the address. Just like map coordinates or longitude
            and latitude, this information can often be processed in 1 cycle.
            <br />
            <br />
            Aha, so passing by reference is always faster and better! Right?
            <br />
            <br />
            Consider the case that each archaeologist wants to take notes on the tablet. If each got a copy
            on a piece of paper, this would have no problem, however, if every archeologist travels to the 
            original stone tablet and make changes there, this would wreak havoc! The original would be forever
            lost and people would be writing changes over each other, it would be terrible!
            <br />
            <br />
            So whether we pass by reference or pass by value is entirely up to our intention and the performance
            requirements.
            <br />
            <br />
            Take Python for example. One of my personal gripes with Python is that it makes passing by reference
            or value rather ambiguous. Take this code.
            <br />
            <br />
            [[0]] is a list within a list. To a list say [0] we can [0] * 2 to create a [0, 0] list. 
            <br />
            <br />
            So as you'd expect, weird_list = [[0]] * 2 produces a list [[0], [0]]. Ok, cool beans.
            <br />
            <br />

            Now we try weird_list[0][0] = 5. What's weird_list now? [[5], [0]] ? WRONG!!!!!!
            <br />
            <br />

            It's actually [[5], [5]]. But what? That makes no sense, why does the second item update 
            when I haven't touched it at all???
            <br />
            <br />
            Think about passing by reference or value. Which of the two creates funny overwrites?
            <br />
            <br />
            That's right! references. So when you did [[0]] * 2, this duplicates the list [0] to become
            [[0], [0]], but it doesn't create a value duplicate, but rather a reference duplicate. the first [0]
            and the second [0] actually point to the same location in memory! They are just different references
            to the same list. So wehn I modify list 1, list 2 is also modified as it's pointing to the 
            same location. 
            <br />
            <br />
            In Python there are 4 primitive data types, ints, floats, strings, and booleans, and these are 
            always passed by value. This is why the above doesn't work with [0] * 2. But lists, objects and
            everything else are by default passed as references.
            <br />
            <br />

            This is also true in most other programming languages. Passing by reference or
            value is a core concept to understand in programming and always something to consider.
            Next time you encounter unexpected behaviour, think, am I suppsoed to pass by references?
            What do I really want?

          </p>
        
        </div>
        
      </div>
      
    </>
  );
}