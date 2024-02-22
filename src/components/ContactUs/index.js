import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import axios from 'axios';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default (props) => {
    const { product } = props;
    const link_url = `https://matrix.to/#/#milkv-${product}:matrix.org`
    const currentLanguage = useBaseUrl('/');
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [hiddenmsg, setHiddenmsg] = useState('')
    const [flag, setFlag] = useState(false)
    const [flag2, setFlag2] = useState(false)
    const [formBtn, setFormBtn] = useState(false)

    useEffect(() => {
        if (flag) {
            document.documentElement.style.overflow = 'hidden'
        } else {
            document.documentElement.style.overflow = 'auto'
        }
    }, [flag, flag2])


    const handleSubmit = (event) => {
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = currentDate.getMonth() + 1;
        var day = currentDate.getDate();
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();
        // 构建中文日期和时间字符串
        var chineseDate = year + "-" + month + "-" + day;
        var chineseTime = hours + ":" + minutes + ":" + seconds;

        let msg = `${subject}: ${chineseDate} ${chineseTime}`

        let productsUrls = {
            'duo': 'https://submit-form.com/mxM7Oj62',
            'pioneer': 'https://submit-form.com/LajdNi4B',
            'mars': 'https://submit-form.com/8WXCfzfP',
            'meles': 'https://submit-form.com/pWzoLWYI',
            'vega': 'https://submit-form.com/CAMdDUGu',
        };

        const url = productsUrls[product] || null;
        event.preventDefault();
        setFormBtn(true)
        axios.get(`${url}?product=${product}&name=${userName}&email=${userEmail}&subject=${subject}&message=${message}&_email.subject=${msg}&_email.from=${userName}`)
            .then((response) => {
                setFlag(true)
                setFormBtn(false)
            })
            .catch((error) => {
                setFlag2(true)
                setFormBtn(false)
            });
    };

    return (
        <>
            <div className={styles.contactMain}>
                <div className={styles.cUs}>
                    <h2 className={styles.maxtitle}>
                        <Translate id='homepage.corporations.emailtitle_1' /><br></br>
                        <Translate id='homepage.corporations.emailtitle_2' />
                    </h2>
                    <div className={styles.flexBox}>
                        <div className={styles.banner_contact}>
                            <Swiper
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className={styles.banner_items}>
                                        < img src='/components/channel.png' />
                                        <div className={styles.on5_bottom}>
                                            <Link to={product === 'home' ? 'https://matrix.to/#/#milk-v:matrix.org' : link_url} style={{ textDecoration: 'none', color: '#fff' }}>{product !== 'home' ? <><Translate id='contact.text.join' />{product}</> : 'join #milk-v'} </Link>
                                        </div>
                                        <p>Join the {product.charAt(0).toUpperCase() + product.slice(1)} Matrix Chat channel to share your ideas with the developers all around the world.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.banner_items}>
                                        <img src='/components/weChat.svg' />
                                        <h2><Translate id='contact.text.WeChat' /></h2>
                                        <div className={styles.on5_bottom} id={styles.wechat}>
                                            <Link to='https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg3NDkwNTYyMw==#wechat_redirect' style={{ textDecoration: 'none', color: '#fff' }}><Translate id='contact.text.WeChat' /></Link>
                                        </div>
                                        <p>Join Milk-V WeChat Group</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.banner_items}>
                                        <img src='/components/QQGroup.svg' />
                                        <h2><Translate id='contact.text.QQ' /></h2>
                                        <div className={styles.on5_bottom} id={styles.joinqq}>
                                            <Link to='https://qm.qq.com/cgi-bin/qm/qr?k=ZFCR14q78e6na-y4RH1KltBaC0UHqiiY&authKey=/HuSnCtvghVjBdHMhj1uZyhbHtLWTEq8AKt85nHQVEDTpYvYw5b0NWc1D1/yAav2&noverify=0' style={{ textDecoration: 'none', color: '#fff' }}><Translate id='contact.text.QQ' /></Link>
                                        </div>
                                        <p>Join Milk-V QQ Group</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className={styles.input_contact}>
                            <div className={styles.textLeft}>
                                {/* <h2><Translate id='contact.title.info' /></h2> */}
                                <div>
                                    <h3><Translate id='contact.title.Sales' /></h3>
                                    <a className={styles.fromA} href="mailto:sales@milkv.io">sales@milkv.io</a>
                                </div>
                                <div>
                                    <h3><Translate id='contact.title.Development' /></h3>
                                    <a className={styles.fromA} href="mailto:dev@milkv.io">dev@milkv.io</a>
                                </div>
                                <div>
                                    <h3><Translate id='contact.title.support' /></h3>
                                    <a className={styles.fromA} href={`mailto:${product}@milkv.io`} >{`${product}@milkv.io`}</a>
                                </div>
                            </div>
                            <div className={styles.touchBox}>
                                {/* <h2><Translate id='contact.title.sendMessage' /></h2> */}
                                <form className={styles.touchForm} onSubmit={handleSubmit}>
                                    <input type="hidden" name="_email.subject" value={hiddenmsg} />
                                    <input type="hidden" name="_email.from" value={userName} />
                                    <div className={styles.flex_inputs}>
                                        <label>
                                            {/* <p><Translate id='contact.title.name' /></p> */}
                                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required placeholder={currentLanguage === '/' ? 'Your Name' : '你的名字'} />
                                        </label>
                                        <label>
                                            {/* <p><Translate id='contact.title.email' /></p> */}
                                            <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required placeholder={currentLanguage === '/' ? 'Your Email' : '你的邮箱'} />
                                        </label>
                                        <label>
                                            {/* <p><Translate id='contact.title.subject' /></p> */}
                                            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required placeholder={currentLanguage === '/' ? 'Subject' : '主题'} />
                                        </label>
                                    </div>
                                    <label>
                                        {/* <p><Translate id='contact.title.message' /></p> */}
                                        <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} required className={styles.message_area} placeholder={currentLanguage === '/' ? 'Message' : '消息'} />
                                    </label>
                                    <button type="submit" className={styles.touchBtn} disabled={formBtn} ><Translate id='contact.title.send' /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.mark_pop} style={{ display: `${formBtn ? 'flex' : 'none'}` }}>
                <div className={styles.loader}></div>
            </div>
            <div className={styles.pop} style={{ display: `${flag ? "flex" : 'none'}` }}>
                <div className={styles.popBox}>
                    <h2>😄<Translate id='contact.send.res' /></h2>
                    <p><Translate id='contact.send.res.info' /></p>
                    <div className={styles.ok} onClick={() => { setFlag(false) }}><Translate id='contact.send.close' /></div>
                </div>
            </div>
            <div className={styles.pop} style={{ display: `${flag2 ? "flex" : 'none'}` }}>
                <div className={styles.popBox}>
                    <h2>😭<Translate id='contact.send.err' /></h2>
                    <p style={{ color: 'red' }}><Translate id='contact.send.err.info' /></p>
                    <div className={styles.ok} onClick={() => { setFlag2(false) }}><Translate id='contact.send.close' /></div>
                </div>
            </div>
        </>
    )
}