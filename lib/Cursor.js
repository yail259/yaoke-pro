import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

export default function Cursor({ children }) {
    return(
        <>
            <div className='App'>
                <AnimatedCursor 
                innerSize={14}
                outerSize={8}
                color='253, 254, 68'
                outerAlpha={0.2}
                innerScale={0.8}
                outerScale={5}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link',
                    'Link',
                    'NavbarIcon'
                ]}
                hasBlendMode={true}
                outerStyle={{
                    mixBlendMode: 'exclusion'
                }}/>
                {children}
            </div>
        </>
    )
}