import React from 'react';
import "./thirdRaw.css";
import { useSelector } from 'react-redux';


const ThirdRaw = ({title2,data}) => {

  const {realArray } = useSelector((state)=>state.platSlice);
  const { answer , title , question } = realArray[0] ? realArray[0] : data[0] ;

  const a = `https://www.google.com/search?q=${answer}&sca_esv=569809553&sxsrf=AM9HkKmdSlWuTFZzigpUX_coJYEU4vwXRw%3A1696140860150&ei=PA4ZZbjjCN2pi-gP4c-G-AM&ved=0ahUKEwi48dSLmdSBAxXd1AIHHeGnAT8Q4dUDCBA&uact=5&oq=big+windows&gs_lp=Egxnd3Mtd2l6LXNlcnAiC2JpZyB3aW5kb3dzMggQABjLARiABDIIEAAYywEYgAQyCBAAGMsBGIAEMggQABjLARiABDIIEAAYywEYgAQyCBAAGMsBGIAEMggQABjLARiABDIIEAAYywEYgAQyCBAAGMsBGIAEMggQABjLARiABEi_XFCmCViGVnACeAGQAQSYAYYDoAHBIKoBBzAuNS42LjW4AQPIAQD4AQGoAhTCAgoQABhHGNYEGLADwgIKEAAYigUYsAMYQ8ICBxAjGIoFGCfCAgcQIxjqAhgnwgIQEAAYigUY6gIYtAIYQ9gBAcICBBAjGCfCAgUQABiABMICCxAuGIAEGMcBGNEDwgILEC4YgAQYxwEYrwHCAgUQLhiABMICBxAAGIoFGEPCAg0QLhiKBRjHARjRAxhDwgIUEC4YgAQYlwUY3AQY3gQY3wTYAQLCAhwQLhiKBRjHARjRAxhDGJcFGNwEGN4EGOAE2AECwgIOEC4YywEYgAQYxwEY0QPCAg4QLhjLARiABBjHARivAcICCBAuGMsBGIAEwgIdEC4YywEYgAQYxwEY0QMYlwUY3AQY3gQY4ATYAQLiAwQYACBBiAYBkAYKugYGCAEQARgBugYGCAIQARgU&sclient=gws-wiz-serp`;
    return (
      <div className='thirdRawContainer'>
        <a href={a}target="_blank">{title}</a>
          <p className='TheQuestionFor'>{question}</p>
          </div>
    )

  
}

export default ThirdRaw