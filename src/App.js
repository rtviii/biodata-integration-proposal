import React, { useEffect, useState } from 'react';
import marked from 'marked'
import './page.css'

function App() {
  const inquirymd = './Inquiry.md'
  const proposalmd = './Proposal.md'
  const [inquiry, setInquiry] = useState('Fetching');
  const [proposal, setProposal] = useState('Fetching')

  useEffect(() => {
    fetch(inquirymd).then(r => r.text()).then(md => {
      setInquiry(marked(md))
    })
    fetch(proposalmd).then(r => r.text()).then(md => {
      setProposal(marked(md))
    })
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {

      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

  }, [])



  return (

    <div className="container">

      <div className="query">
        <button className="accordion">Proposal</button>
        <div className="panel" dangerouslySetInnerHTML={{ __html: proposal }} />

        <div className="inquiry" dangerouslySetInnerHTML={{ __html: inquiry }}>

        </div>

      </div>
    </div>
  );
}

export default App;
