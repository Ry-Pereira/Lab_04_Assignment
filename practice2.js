function applyBackgroundRGBColors(){
    let dummy_text_paragraph = document.getElementById("dummy_text");
    
    let rgb_red_background_color_number = document.getElementById("background_red_color_number_input").value;
    let rgb_green_background_color_number = document.getElementById("background_green_color_number_input").value;
    let rgb_blue_background_color_number = document.getElementById("background_blue_color_number_input").value;
    

    dummy_text_paragraph.style.backgroundColor = "rgb(" + rgb_red_background_color_number + "," + rgb_green_background_color_number + "," + rgb_blue_background_color_number + ")"
   
}

function applyBorderWidth(){
    let dummy_text_paragraph = document.getElementById("dummy_text");
    let paragraph_border_width = document.getElementById("border_width_input").value;
    dummy_text_paragraph.style.borderWidth = paragraph_border_width + "px";
    dummy_text_paragraph.style.borderStyle = "solid";
    dummy_text_paragraph.style.borderColor = "black";
}

function applyBorderColors(){
    let dummy_text_paragraph = document.getElementById("dummy_text");



    let rgb_red_border_color_number = document.getElementById("border_red_color_number_input").value;
    let rgb_green_border_color_number = document.getElementById("border_green_color_number_input").value;
    let rgb_blue_border_color_number = document.getElementById("border_blue_color_number_input").value;

    dummy_text_paragraph.style.borderColor = "rgb(" + rgb_red_border_color_number + "," + rgb_green_border_color_number + "," + rgb_blue_border_color_number + ")"
}