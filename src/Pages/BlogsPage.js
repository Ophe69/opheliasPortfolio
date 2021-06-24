import React from 'react';
import Title from '../Components/Title';
import articles from '../Components/articles';

function BlogsPage() {
    return (
        <div >
            <div className="b-title">
                <Title title={'Articles likés'} span={'Articles likés'} />
            </div>
            <div className="BlogsPage">
                {
                    articles.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt=""/>
                                <a href={blog.link} className="blog-link">
                                    {blog.title}
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
            
        </div>
    )
}

export default BlogsPage;
