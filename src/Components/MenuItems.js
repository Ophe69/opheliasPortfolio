import React from 'react'

function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link}>{item.icon1}</a>
                                    {/* <a href={item.link2}>{item.icon2}</a> */}
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>Créer une interface utilisateur avec HTML et CSS
                            Maîtriser la notion de DOM et d'événements en JS
                            Maîtriser le fonctionnement d’une librairie JS, avec JQuery
</p>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;
