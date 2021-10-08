import React from 'react'

import HorizontalCard from '../../components/HorizontalCard/HorizontalCard'

import TestimonialsJSon from '../../utils/Testimonials.json'



function Testimonials(){




    return(
    <>

            <div className="container">
                <section className="test">
                        
                    <h1>Testimonials</h1>
                    <hr />

                    {TestimonialsJSon.map(test => (

                        <HorizontalCard
                            key={test.ImageName} 
                            Id = {test.Id}
                            Name = {test.Name}
                            Quote = {test.Quote}
                            LocationCity = {test.LocationCity}
                            LocationCountry = {test.LocationCountry}
                            ImageURL = {test.ImageURL}
                            ImageName = {test.ImageName}
                        />
                    ))}                 

                    <h4>BRIAN GLUCKSTEIN</h4>
                    <p>Tony Koukos has collaborated with Brian Gluckstein since 2004 on multiple commercial and residential projects including the Four Seasons in Toronto and Palm Beach.
                    </p>
                    <p>"Tony has a very sophisticated eye particularly in his selection of architecture and landscape," says Gluckstein. Koukos currently curates an assortment of his photographs for the Gluckstein Home artwork collection distributed throughout Canada at Home Outfitters and in the United States at Lord & Taylor Home.
                    </p>

                    <p>www.glucksteindesign.com</p>

                    <h5>ABOUT BRIAN</h5>
                    <p>Brian Gluckstein is internationally known for his sophisticated interiors and award-winning commercial and residential design projects. Since launching his interior design career over two decades ago, Gluckstein has been celebrated for his effortless style and talent for mixing timeless pieces with contemporary design.
                    </p>
                    <p>As principal of GlucksteinDesign, Gluckstein has led such high-profile projects as One St. Thomas Condominiums, 100 Yorkville, The Four Seasons Hotel/Condominiums in Toronto and The Four Seasons Spa in Palm Beach. lucksteinDesign is widely recognized for its upscale interior design projects for many prominent families, corporations and hotels throughout Canada and abroad. In 1999, Gluckstein created GlucksteinHome, a high-style line of affordable home furnishings that reflects the luxurious, yet functional appeal of his work.
                    </p>
                    <h5>BRIAN’S ART TIPS</h5>
                    <p>Go Big. Don’t be timid when it comes to art. Use large format pieces and strive to fill the wall. An easy and frequent mistake that homeowners make is choosing and hanging art that is too small for the space.
                    </p>
                    <p>Multiply. If you have a number of smaller pieces you love, group them together gallery style. The key to a successful gallery wall is selecting art pieces that evoke a consistent mood. Hang the pieces in either a grid or an organic, free flowing formation.
                    </p>
                    <p>Consider Height. Art is often hung too high which can result in a disconnected look. As a guideline, hang pieces six to eight inches above your furniture but note that ideal placement will depend on the proportion of furniture, the size of art pieces and the dimensions of the wall.
                    </p>
                    <p>Go Local. Support local artists and select unique pieces that reflect your personal style.
                    </p>
                    <p>Use Your Intuition. Above all, buy what you love and don’t worry about the décor. If you’re truly drawn to the piece and have designed a space that you love, it will look good. Trust your intuition and don’t overthink it.
                    </p>



                    <h5>COLIN COWIE</h5>

                    <p>I met Tony many years ago in 2002, in Mykonos, Greece – he was just starting to take photography seriously, but hadn’t yet made it his career. I could tell immediately he had the gift. I had a chance to see an extensive portfolio of his works and it’s truly magnificent. His passion for travel fuels his art with a unique and special spirit.
                    </p>
                    <p>Tony is an incredible artist and his warm soul can be felt in every picture. Over the years I’ve excitedly watched as his talents have grown and he’s become recognized around the world as a serious artist. I have a few pieces adorning the walls in my Manhattan penthouse, and love the simplicity and understated elegance of his work.
                    </p>

                    
                    <h5>SARAH RICHARDSON</h5>

                    <p>"We love working with Tony Koukos! His collection of travel photography from around the world is truly comprehensive-there are thousands of images to choose from and his range of substrates – including plexi-glass, metal, wood and canvas-makes the collection all the more versatile. Tony’s understanding of the design process and his ability to meet tight deadlines, have made him an invaluable supplier of fine art photography used in both our television and our private client work. We would highly recommend giving Tony Koukos’ portfolio a look. You won’t be sorry you did!"
                    </p>

                    <p>Sarah Richardson,
                    Host and Co-producer, Design Inc., Sarah’s House, Sarah’s Cottage, and Sarah 101 on HGTV +Principal, Sarah Richardson Design
                    Tommy Smythe
                    Design, TV Personality + Co-host</p>
                    
                    <p>www.sarahrichardsondesign.com</p>


                    <h5>TOMAS PEARCE</h5>

                    <p>We have had the pleasure of working with Tony for a number of years now on countless residential and commercial projects. We continue to be pleased with his creativity, vision and professionalism. Tony constantly stays aheadof the trends by offering fresh and innovative pieces, and by forever exploring new artistic mediums. Most recently Tony worked with us on an installment at Toronto's Interior Design Show 2012, creating a custom illuminated backsplash of one of his stunning black and white photographs that received acclaimed praise from the design industry. No matter where the world traveler is,Tony always accommodates his clientsand ensures that his beautiful pieces arrive on time, and to a standard of excellence that defines his work.
                    </p>
                    
                    <p>Michelle Demeulenaere
                    Tomas Pearce Interior Design Consulting Inc. www.tomaspearce.com</p>
                    

                    <h5>DESIGN LINES MAGAZING</h5>
                    <p>Design Lines Magazine, Toronto
                    "Nowthis is different!"
                    Koukos Wall Coverings collection was awarded the “Love Tag” at Interior Design Show 2012
                    www.designlinesmagazine.com</p>
                    
                    <h5>SAMANTHAN PYNN</h5>

                    <p>"I absolutely love the versatility of Tony’s work; such a diverse collection of travel imagery from around the world and digital designs. Even better, everything is fully customizable, very affordable and available on different applications. I especially love the “Parisian Library Books” wall coverings, which I featured on Cityline Television"
                    </p>

                    <h5>GREGORY C. PAPPAS</h5>
                    <p>Tony Koukos has been a proud supporter of the Greek America Foundation and has shared his passion with our members through numerous donations to our auctions and special events. His selection as one of our "Forty Under 40” in 2012 is a testament to his excellence in his craft, as well as dedication to making the world around him a better place. The world needs more people like Tony Koukos who strive for excellence in everything they do. I am proud to have his art hanging in both my residences, in America andin Greece. Keep up the great work Tony!
                    Gregory C. Pappas</p>

                    <p>Pappas Post, Chief Editor
                    Greek America Foundation, Founder/President
                    www.pappaspost.com
                    www.greekamerica.org</p>
                    

                    
                </section>
            </div>

    </>
    )


}


export default Testimonials