import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="widget-area">
            <div className="widget widget_insight">
                <ul>
                    <li>
                        <Link href="/about-3">
                            <li>About Us</li>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <li>Contact Us</li>
                        </Link>
                    </li>
                    <li>
                        <Link href="/purchase-guide">
                            <li>Purchase Guide</li>
                        </Link>
                    </li>
                    <li>
                        <Link href="/privacy-policy">
                            <li>Privacy Policy</li>
                        </Link>
                    </li>
                    <li>
                        <Link href="/terms-of-service">
                            <li>Terms of Service</li>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="widget widget_recent_courses">
                <h3 className="widget-title">Recent Courses</h3>

                <div className="item">
                    <Link href="#">
                        <li className="thumb">
                            <span className="fullimage cover bg1" role="img"></span>
                        </li>
                    </Link>
                    <div className="info">
                        <span>$49.00</span>
                        <h4 className="title usmall">
                            <Link href="#">
                                <li>The Data Science Course 2020: Complete Data Science Bootcamp</li>
                            </Link>
                        </h4>
                    </div>
                    <div className="clear"></div>
                </div>

                <div className="item">
                    <Link href="#">
                        <li className="thumb">
                            <span className="fullimage cover bg2" role="img"></span>
                        </li>
                    </Link>
                    <div className="info">
                        <span>$59.00</span>
                        <h4 className="title usmall">
                            <Link href="#">
                                <li>Java Programming MasterclassName for Software Developers</li>
                            </Link>
                        </h4>
                    </div>
                    <div className="clear"></div>
                </div>

                <div className="item">
                    <Link href="#">
                        <li className="thumb">
                            <span className="fullimage cover bg3" role="img"></span>
                        </li>
                    </Link>
                    <div className="info">
                        <span>$69.00</span>
                        <h4 className="title usmall">
                            <Link href="#">
                                <li>Deep Learning A-Z™: Hands-On Artificial Neural Networks</li>
                            </Link>
                        </h4>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Popular Tags</h3>

                <div className="tagcloud">
                    <Link href="#">
                        <li>Business <span className="tag-link-count">(3)</span></li>
                    </Link>

                    <Link href="#">
                        <li>Design <span className="tag-link-count">(3)</span></li>
                    </Link>

                    <Link href="#">
                        <li>Braike <span className="tag-link-count">(2)</span></li>
                    </Link>

                    <Link href="#">
                        <li>Fashion <span className="tag-link-count">(2)</span></li>
                    </Link>

                    <Link href="#">
                        <li>Travel <span className="tag-link-count">(1)</span></li>
                    </Link>

                    <Link href="#">
                        <li>Smart <span className="tag-link-count">(1)</span></li>
                    </Link>

                    <Link href="#">
                        <li>Marketing <span className="tag-link-count">(1)</span></li>
                    </Link>

                    <Link href="#">
                        <li>Tips <span className="tag-link-count">(2)</span></li>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;