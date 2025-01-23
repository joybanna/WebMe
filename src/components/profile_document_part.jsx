import React from 'react'
import docImg from '../assets/img/053-file.png'
function profile_document_part() {
    return (
        <div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
            <div class="w3-content">
                <div class="w3-third w3-center">
                    <img class="icon-toppic-l" src={docImg} />
                </div>
                <div class="w3-twothird">
                    <div class="toppic-text-r">Reference</div>
                    <div class="box-personal">
                        <div class="box1-1">
                            <a class="sub-text"><b>Transcript</b> </a>
                        </div>
                        <div class="box1-2">
                            <a class="sub-text">
                                <ul>
                                    <li><a className='normal' href="img/transcript.png">Image file </a></li>
                                    <li><a className='normal' href="img/transcript.pdf">PDF file</a></li>
                                </ul>
                            </a>
                        </div>
                        <div class="box2-1">
                            <a class="sub-text"><b>Resume</b> </a>
                        </div>
                        <div class="box2-2">
                            <a class="sub-text">
                                <ul>
                                    <li><a className='normal' href="img/resume.1.png"> Image file</a></li>
                                    <li><a className='normal' href="img/resume1.1.pdf"> PDF file</a></li>
                                </ul>
                            </a>
                        </div>
                        <div class="box3-1">
                            <a class="sub-text"><b>Refer</b> </a>
                        </div>
                        <div class="box3-2">
                            <a class="sub-text">
                                <ul>
                                    <li><a className='normal' href="img/resume.1.png"> Image file</a></li>
                                    <li><a className='normal' href="img/resume1.1.pdf"> PDF file</a></li>
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile_document_part