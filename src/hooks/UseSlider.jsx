import { useEffect, useLayoutEffect } from 'react';

const useSlider = (ref, innerRef) => {
    let isKeyDown = false;
    let startX;
    let scrollLeft;
    let slider;

    useEffect(() => {
        if(innerRef) {
            slider = [...ref.current.childNodes].find(child => {
                return [...child.classList].includes(innerRef)
            })
        } else {
            slider = ref.current;
        }

        console.log(slider);
        slider.addEventListener("mousedown", mouseDownHandler);
        slider.addEventListener('wheel', wheelHandler);
        slider.addEventListener('mousemove', mouseMoveHandler);
        slider.addEventListener('mouseup', mouseUpHandler);
        slider.addEventListener('mouseleave', mouseLeaveHandler);


        // console.log('Компонента вмонтирована');
    },[]);

    useLayoutEffect(() => {
        return () => {
            slider.removeEventListener("mousedown", mouseDownHandler);
            slider.removeEventListener('wheel', wheelHandler);
            slider.removeEventListener('mousemove', mouseMoveHandler);
            slider.removeEventListener('mouseup', mouseUpHandler);
            slider.removeEventListener('mouseleave', mouseLeaveHandler);


            // console.log('Компонента удалена');
        }
    }, [])

    const mouseDownHandler = (e) => {
        isKeyDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }

    const mouseUpHandler = (e) => {
        isKeyDown = false;
    }

    const mouseMoveHandler = (e) => {
        if (!isKeyDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX);
        slider.scrollLeft = scrollLeft - walk;
    }

    const wheelHandler = (e) => {
        e.preventDefault();
        scrollLeft = slider.scrollLeft;
        const walk = slider.scrollLeft - e.wheelDelta;
        slider.scrollLeft = walk;
    }

    const mouseLeaveHandler = (e) => {
        isKeyDown = false;
    }
}

export default useSlider;