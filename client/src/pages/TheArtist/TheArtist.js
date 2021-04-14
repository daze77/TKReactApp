import React from 'react'
import './TheArtist.css'
import tonykphoto from '../../assets/tkimages/tonykphoto.jpg'



function TheArtist(){




    return(
    <>


        <div class="container">
            <section>
                <h1>Biography</h1> 
                <hr/>  
                <div class="row ">
                    <div class="col-md-9">
                        <p>
                            Tony Koukos, photographer, has found inspiration throughout the world. Currently residing Canada, it is not uncommon for 
                            him to board a jet plane at the last minute to complete a project or embark on a new adventure. Whether it’s climbing 
                            the medieval towers of Tuscany or scuba-diving the Great Barrier Reef, he does whatever it takes to find a distinctive angle, 
                            that perfect shot. His pictures speak for themselves, each a piece of art, conveying a message of history, character and natural beauty.
                        </p>
                        <p>
                            After obtaining a University degree in business, Tony was in the financial services industry for 7 years. In May of 2004, he decided to make a change. 
                            Resigning from his position, he decided to become a photographer. Having no experience or education in the art and design industry, his passion for travel, 
                            photography and design surpassed the fear of failure.
                        </p>
                        <p>
                            His obsession to keep moving forward in life, has brought him to approximately 45 countries including; Italy, Cuba, Australia, Thailand, Morocco, Japan, 
                            Turkey, Croatia, Brazil, Argentina and many more. He regularly ventures off on a photo shoot to one of the many corners of the world, seeking new subject matter 
                            to create his newest collection. He faithfully returns to Greece each year, where his roots lie, to capture the shadows cast on the whitewashed villas of the 
                            sun-drenched Greek Isles. The future of this world travel photographer brings him on adventures to Africa and India, where we anticipate his new images that 
                            will surely captivate us.
                        </p>   
                    </div>
                    <div class="col-md-3">
                        <div class="img-fluid">
                            <img class="img-fluid float-lg-end" src={tonykphoto}/>
                        </div>
                    </div>
                    <div>
                        <h3>Artist Statement</h3>
                        <blockquote class="statementbody">
                            As a photographer, I love to capture the details of our beautiful planet…. the little things that everyday people walk by and don’t take the time to appreciate.   
                            Beauty can be found everywhere, from crackled wood textures in the Cycladic Islands of Greece, to the shimmering ocean in Miami and ornate architectural details 
                            of Paris. Just stop and scan your surroundings to find it. Each time I board a plane to embark on a new journey, I am always excited to see what the world is 
                            presenting to my lens.
                                <p style={{textAlign: "right", fontSize: "80%"}}>Tony Koukos</p>
                        </blockquote>
                    </div>
                </div>
            </section>



            <section>
                
                <h1>Shows, Television and Film</h1>
                <hr />
            
            </section>



            <section>
 
                <h1>Published</h1>
                <hr />
                <ul>
                    <li>Notable mention in The Goddess of the Hunt, June 12, 2011</li>
                    <li>Listed in Seductively French</li>
                    <li>YYZ Living magazine notable mention from the One of a Kind Show, 2011</li>
                    <li>Thunder Bay Chronicle Journal</li>
                    <li>Published by three international art publishers, one from each; Canada, United States, and England</li>
                    <li>Featured on House & Home</li>
                    <li>Artwork for Princess Margaret Show home was donated by Tony Koukos.</li>
                    <li>Feature in Gifts & Tablewares magazine, a look at what was "in" in home décor at the CGTA Fall Gift Show, Sept 2007</li>
                </ul>
            </section>



            <section>
                <h1>Photography Tips</h1>
                <hr />
                <ul>
                    <li>Composition. The best photographs have a unique angle. Climb on top or kneel down to get that perfect shot; capture a different perspective. 
                        Walk around the subject that you want to shoot. Art is everywhere; it’s just a matter of scoping it out. It’s all about the angle. On my most recent 
                        trip to Dubrovnik, Croatia, I woke up at 4:00 a.m. to capture the polished stone streets right after they were washed. I stretched out on the ground 
                        and set up my tripod. It’s as if the stones were coming into my lens.
                    </li>
                    <li>Synergy. Everyone always asks, "What do you shoot?", and "Where do you get your ideas for a collection?" Inspiration is everywhere. A piece may be 
                        beautiful as a "stand-alone", however, if you create a theme, and run with it, the results are astounding. On my most recent trip to Italy, the 
                        doorknockers in Tuscany intrigued me. Each one is a piece of art, with a beautifully aged wooden door as a backdrop. Each knocker was stunning, 
                        but when I saw the entire collection together, the results of my efforts were magnified. I also photographed collections of clocks and doors from 
                        around the world. Get creative and start thinking of themes to capture. The sky’s the limit!
                    </li>
                    <li>Keep snapping. Now with digital photography, you can keep taking as many pictures as you want without incurring the cost of film. It’s just a matter 
                        of editing and deleting the ones you don’t want. Also, always shoot on the maximum resolution, meaning the largest file format. At a later date, you 
                        can always crop out certain areas of the picture, and still have enough resolution to enlarge the portion of the picture that you like. A maximum 
                        file size will allow you to print your pictures to almost any size. I also recommend stocking up on extra memory cards, film, and batteries. I will 
                        never forget my frantic search for batteries in Venice back in 1998.
                    </li>
                    <li>Digital Restoration. If you can keep the image real without manipulating it to look beyond fake, go for it! Clean up your images and make them more 
                        visually appealing. Take out that obtrusive power line, and allow the beauty of what it is you’ve captured to rise above. Also, have your favorite 
                        film images converted to digital files, that way you can keep the film in your archives, and a digital back up off site. By the way, film is still great. 
                        I love to capture Europe with black and white film. Take two cameras; one digital SLR and one film.
                    </li>
                    <li>Back it up. External drives are very inexpensive. Always keep images backed up. I suggest keeping them on your computer, in a smaller file size, for 
                        easy viewing. Larger or maximum file sizes will start taking up valuable storage space. Also, viewing & retrieving them are much faster with a smaller 
                        size file. All images (maximum/originals) should be backed up to hard drives; one in your residence, and a duplicate drive at a close friend or family 
                        member’s house. It will only take a few minutes; be proactive to the situation. The last thing you would want is to lose those precious holiday photos, 
                        or vacation photos with your fabulous friends from your summer holidays in the sun-drenched Greek Isles.
                    </li>
                    <li>Put the camera down! Don’t forget to stop and enjoy your surroundings!
                    </li>
                </ul>
            </section>  

            <section>
                <h1>Photo Gallery</h1>
                <hr />
                <p>Coming Soon...</p>
            </section>
        </div>



    </>
    )


}


export default TheArtist