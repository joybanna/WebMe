import React from 'react'
import objImg from '../assets/img/055-cursor.png'

function profile_objective_part() {
    return (
        <div class="w3-row-padding w3-padding-64 w3-container">
            <div class="w3-content">
                <div class="w3-twothird">
                    <div class="toppic-text-l">Objective</div>
                    <a class="sub-text"
                    >I am a Unity Developer with a fervent commitment to crafting engaging and accessible games for players around the globe. With a robust proficiency in Unity, I am dedicated to developing quality games that are both enjoyable and innovative. My objective is to contribute to the global gaming community by creating experiences that bring joy and entertainment to players worldwide.</a
                    >
                </div>
                <div class="w3-third w3-center">
                <img class="icon-toppic-r" src={objImg} />
                </div>
            </div>
        </div>
    )
}

export default profile_objective_part