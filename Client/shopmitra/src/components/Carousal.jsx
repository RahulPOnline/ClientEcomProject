import React, { useEffect, useRef, useState } from 'react'
import "../style/Style.css";

export default function Carousal({ data }) {

    let images = data
    let [curr, setCurr] = useState(0)
    let timer = useRef(null)


    useEffect(() => {

        setTimer()

    }, [curr])

    function setTimer() {
        if (timer.current == null) {
            timer.current = setInterval(() => {
                setCurr((prev) => {
                    return prev + 1 > images.length - 1 ? 0 : prev + 1
                })

            }, 2000)
        } else {
            return
        }
    }



    function next() {
        let val = curr >= images.length - 1 ? 0 : curr + 1
        setCurr(val)
    }
    function prev() {
        let val = curr <= 0 ? images.length - 1 : curr - 1
        setCurr(val)


    }


    return (
        <div style={{
            // border: "1px solid red",
            // marginTop: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
        }}>
            <button style={{
                position: "absolute",
                zIndex: "10",
                left: "0px",
                width: "50px",
                height: "100px",
                border: "none",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
                fontSize: "20px",
                color: "rgba(230, 167, 31, 1) ",
                backgroundColor: "rgba(252, 219, 149, 1) "
            }}
                onClick={prev}

            >&lt;</button>

            {/* <img className='slider' style={{
                width: "100%",
                transform: `translateX(-${curr * 100}%)`
                
            }} src={images[curr]} alt="" /> */}

            {/* <div style={{ width: "100%", overflow: "hidden" }}>
                <div style={{
                    display: "flex",
                    width: `${images.length * 100}%`,
                    transition: "transform 0.6s ease-in-out",
                    transform: `translateX(-${curr * (100 / images.length)}%)`
                }}>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="image"
                            style={{
                                width: `${100 / images.length}%`,
                                flexShrink: 10
                            }}
                        />
                    ))}
                </div>
            </div> */}

            <div style={{ width: "100%", height: "300px", overflow: "hidden" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: `${images.length * 100}%`,
                        transition: "transform 0.6s ease-in-out",
                        transform: `translateY(-${curr * (100 / images.length)}%)`,
                    }}
                >
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="image"
                            style={{
                                height: `${100 / images.length}%`,
                                width: "100%",
                                objectFit: "cover",
                                flexShrink: 0,
                            }}
                        />
                    ))}
                </div>
            </div>




            <button style={{
                position: "absolute",
                zIndex: "0",
                right: "0px",
                width: "50px",
                height: "100px",
                border: "none",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                fontSize: "20px",
                color: "rgba(230, 167, 31, 1) ",
                backgroundColor: "rgba(252, 219, 149, 1) "
            }}
                onClick={next}

            >&gt;</button>

        </div>
    )
}
