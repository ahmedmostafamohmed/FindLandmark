$(document).ready(function () {

    let results = document.getElementById("demo"),
        searchInput = document.getElementById("FindPoiByName"),
        searchByCategory = document.getElementById("FindCategory"),
        searchValue,
        temp = document.getElementById("demo"),
        myHttp,
        myResponse,
        myData,
        dataOfList = [];
        //  to Get data from API :

    async function getData() {
        //  get HTTP
        myHttp = await fetch(`poi_sample.geojson`);
        //  get Response
        myResponse = await myHttp.json();
        // get Data
        myData = myResponse.features
        console.log('my data is ' + myData);
        console.log("response is Done");
        // to convert object to arrey >> we can't for loop in object
        dataOfList = myData;
        // displayData();
    }


        // ------------------------------------ Display Data ---------------------------------------
        
    // function displayData() {
    //     // to display Data
    //     temp = ''
    //     for (var i = 0; i < dataOfList.length; i++) {
    //         // console.log(dataOfList[i].properties.id);
    //         temp += `
    //         <tr>
    //         <td>${dataOfList[i].properties.id}</td>
    //         <td>${(dataOfList[i].properties.name_arabi) ? dataOfList[i].properties.name_arabi : null}</td>
    //         <td>${(dataOfList[i].properties.name_engli) ? dataOfList[i].properties.name_engli : null}</td>
    //         <td>${(dataOfList[i].properties.alt_name_a) ? dataOfList[i].properties.alt_name_a : null}</td>
    //         <td>${(dataOfList[i].properties.alt_name_en) ? dataOfList[i].properties.alt_name_en : null}</td>
    //         <td>${(dataOfList[i].properties.keyword_ar) ? dataOfList[i].properties.keyword_ar : null }</td>
    //         <td>${(dataOfList[i].properties.keyword_en) ? dataOfList[i].properties.keyword_en : null }</td>

    //         <td>${(dataOfList[i].properties.open_time) ? dataOfList[i].properties.open_time : null }</td>
    //         `
    //     }
    //     results.innerHTML = temp;
    // }
    getData()

        // ------------------------------------ Search By Name ---------------------------------------

    searchInput.addEventListener("keyup", function () {

        searchValue = searchInput.value.toLowerCase();
        temp = "";
        for (var i = 0; i < dataOfList.length; i++) {
            if (dataOfList[i].properties.name_engli.toLowerCase().includes(searchValue) == true
                || dataOfList[i].properties.name_arabi.toLowerCase().includes(searchValue) == true
            ) {
                // Backtalk ` ` 
                temp += `
                  
    <div class="card border-0 shadow text-center mb-4">
        <div class="card-header  p-1">
            <div class="container-fluid row">
                <div class="name col-md-6 col-sm-12 text-start fs-4">${(dataOfList[i].properties.name_engli) ? dataOfList[i].properties.name_engli : ''}</div>
                <div class="name col-md-6 col-sm-12 text-end fs-4">${(dataOfList[i].properties.name_arabi) ? dataOfList[i].properties.name_arabi : ''}</div>
            </div>
        </div>

        <div class="card-body row gy-3">
            <div class="col-md-4 text-start">
                <span>${(dataOfList[i].properties.alt_name_en) ? dataOfList[i].properties.alt_name_en : ''}</span> <span class="">${(dataOfList[i].properties.alt_name_a) ? dataOfList[i].properties.alt_name_a : ''}</span>
            </div>

            <div class="col-md-8 text-end">${(dataOfList[i].properties.full_add_1) ? dataOfList[i].properties.full_add_1 : ''} 

                <i data-bs-toggle="collapse" data-bs-target="#collapseExample" class="fa-solid fa-location-dot"></i>

                <div class="collapse" id="collapseExample"><div class="" id="sampleCode">${dataOfList[i].geometry.coordinates}</div>
        
                <i class="fa-solid fa-copy" id="copyButton"></i>

            </div>
          
        </div>

        <div class="col-md-8 text-start">
          <div class="text-primary py-2" >${(dataOfList[i].properties.open_time) ? '<i class="fa-regular fa-clock text-black"></i> ' + dataOfList[i].properties.open_time : ''}</div>
        </div>
            
        <div class="col-md-4 text-end">
            <span class="me-3">
                <a class="text-decoration-none" href="https://www.google.com/maps/place/${dataOfList[i].properties.y},${dataOfList[i].properties.x}" target="_blank">
                    <img src="./images/googlemaps.png" alt="Girl in a jacket" width="25px" height="25px" title="open in Google Map">
                </a>
            </span>
            <span class="me-3">
                <a class="text-decoration-none" href="https://www.openstreetmap.org/search?query=${dataOfList[i].properties.y},${dataOfList[i].properties.x}" target="_blank">
                    <img src="./images/osm_logo.png" alt="Girl in a jacket" width="25px" height="25px" title="open in OSM">
                </a>
            </span>
        </div>



            <div class="col-md-9 text-start">

                <span>
                <a class="td-Social" target="_blank" href="https://${(dataOfList[i].properties.website) ? dataOfList[i].properties.website : null}">
                ${(dataOfList[i].properties.website) ? '<i class="webS fa-solid fa-globe fs-3 px-2"></i>' : ''}
                </a>
                </span>


                <span>
                <a class="td-Social" target="_blank" href="${(dataOfList[i].properties.email) ? dataOfList[i].properties.email : null}">
                ${(dataOfList[i].properties.email) ? '<i class="mail fa-regular fa-envelope fs-3"></i>' : ''}
                </a>
                </span>



                <span>
                <a class="td-Social" target="_blank" href="https://www.facebook.com/${(dataOfList[i].properties.facebook) ? dataOfList[i].properties.facebook : ''}">
                ${(dataOfList[i].properties.facebook) ? '<i class="faceB fa-brands fa-facebook fs-3 ps-2"></i>' : ''}
                </a>
                </span>

                <span>
                <a class="td-Social" target="_blank" href="https://twitter.com/${(dataOfList[i].properties.twitter) ? dataOfList[i].properties.twitter : ''}">
                ${(dataOfList[i].properties.twitter) ? '<i id="twt" class="twit fa-brands fa-twitter fs-3"></i>' : ''}
                </a>
                </span>

                <span>
                <a class="td-Social" target="_blank" href="https://www.instagram.com/${(dataOfList[i].properties.instagram) ? dataOfList[i].properties.instagram : ''}">
                ${(dataOfList[i].properties.instagram) ? '<i class="insta fa-brands fa-instagram fs-3 ps-2"></i>' : ''} 
                </a>
                </span>

                <span>
                    <a target="_blank" href="${(dataOfList[i].properties.survey_ima) ? dataOfList[i].properties.survey_ima : null}">
                    ${(dataOfList[i].properties.survey_ima) == 'NoImage'? '' : '<i class="imgPath fa-regular fs-3 ps-2 fa-image"></i>'}
                    </a>
                </span>

            </div>
            
            <div class="col-md-3 text-end bg-light text-primary ">التصنيفات : ${(dataOfList[i].properties.types_arab) ? dataOfList[i].properties.types_arab : ''}</div>


        </div>
        <div class="card-footer p-2 ">
            <div class="row">
                <div class="col-md-8 col-sm-12 d-flex text-start">
                    <div> <a class="phone text-decoration-none">${(dataOfList[i].properties.phone1) ? '<i class="fa-solid fa-phone text-black"></i> <span class="text-black">: </span>' + dataOfList[i].properties.phone1 : ''}</a></div>
                    <div class="px-3"><a class="phone text-decoration-none">${(dataOfList[i].properties.phone2) ? dataOfList[i].properties.phone2 : ''}</a></div>
                    <div><a class="phone text-decoration-none">${(dataOfList[i].properties.phone3) ? dataOfList[i].properties.phone3 : ''}</a></div>
                    <div class="px-3"><a class="phone text-decoration-none">${(dataOfList[i].properties.phone4) ? dataOfList[i].properties.phone4 : ''}</a></div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="text-end text-muted">${(dataOfList[i].properties.keyword_ar) ? 'كلمات دالة :' + dataOfList[i].properties.keyword_ar : ''}</div>
                </div>
            </div>
        </div>
    </div>
   

        `
            }
        }
        results.innerHTML = temp;

        $(".fixed-bottom").hide();

        console.log("Search by Name is Done");

    })
    // ------------------------------------ Search By Category ---------------------------------------

    searchByCategory.addEventListener("keyup", function () {

        searchValue = searchByCategory.value.toLowerCase();
        temp = "";
        for (var i = 0; i < dataOfList.length; i++) {
            if (dataOfList[i].properties.types_arab.toLowerCase().includes(searchValue) == true
            || dataOfList[i].properties.types_engl.toLowerCase().includes(searchValue) == true
            ) {
                temp += 
            `
                <div class="card border-0 shadow text-center mb-4">
                <div class="card-header  p-1">
                    <div class="container-fluid row">
                        <div class="name col-md-6 col-sm-12 text-start fs-4">${(dataOfList[i].properties.name_engli) ? dataOfList[i].properties.name_engli : ''}</div>
                        <div class="name col-md-6 col-sm-12 text-end fs-4">${(dataOfList[i].properties.name_arabi) ? dataOfList[i].properties.name_arabi : ''}</div>
                    </div>
                </div>
        
                <div class="card-body row gy-3">
                    <div class="col-md-4 text-start">
                        <span>${(dataOfList[i].properties.alt_name_en) ? dataOfList[i].properties.alt_name_en : ''}</span> <span class="">${(dataOfList[i].properties.alt_name_a) ? dataOfList[i].properties.alt_name_a : ''}</span>
                    </div>
        
                    <div class="col-md-8 text-end">${(dataOfList[i].properties.full_add_1) ? dataOfList[i].properties.full_add_1 : ''} 
        
                        <i data-bs-toggle="collapse" data-bs-target="#collapseExample" class="fa-solid fa-location-dot"></i>
        
                        <div class="collapse" id="collapseExample"><div class="" id="sampleCode">${dataOfList[i].geometry.coordinates}</div>
                
                        <i class="fa-solid fa-copy" id="copyButton"></i>
        
                    </div>
                  
                </div>
        
                <div class="col-md-8 text-start">
                  <div class="text-primary py-2" >${(dataOfList[i].properties.open_time) ? '<i class="fa-regular fa-clock text-black"></i> ' + dataOfList[i].properties.open_time : ''}</div>
                </div>
                    
                <div class="col-md-4 text-end">
                    <span class="me-3">
                        <a class="text-decoration-none" href="https://www.google.com/maps/place/${dataOfList[i].properties.y},${dataOfList[i].properties.x}" target="_blank">
                            <img src="./images/googlemaps.png" alt="Girl in a jacket" width="25px" height="25px" title="open in Google Map">
                        </a>
                    </span>
                    <span class="me-3">
                        <a class="text-decoration-none" href="https://www.openstreetmap.org/search?query=${dataOfList[i].properties.y},${dataOfList[i].properties.x}" target="_blank">
                            <img src="./images/osm_logo.png" alt="Girl in a jacket" width="25px" height="25px" title="open in OSM">
                        </a>
                    </span>
                </div>
        
        
        
                    <div class="col-md-9 text-start">
        
                        <span>
                        <a class="td-Social" target="_blank" href="https://${(dataOfList[i].properties.website) ? dataOfList[i].properties.website : null}">
                        ${(dataOfList[i].properties.website) ? '<i class="webS fa-solid fa-globe fs-3 px-2"></i>' : ''}
                        </a>
                        </span>
        
        
                        <span>
                        <a class="td-Social" target="_blank" href="${(dataOfList[i].properties.email) ? dataOfList[i].properties.email : null}">
                        ${(dataOfList[i].properties.email) ? '<i class="mail fa-regular fa-envelope fs-3"></i>' : ''}
                        </a>
                        </span>
        
        
        
                        <span>
                        <a class="td-Social" target="_blank" href="https://www.facebook.com/${(dataOfList[i].properties.facebook) ? dataOfList[i].properties.facebook : ''}">
                        ${(dataOfList[i].properties.facebook) ? '<i class="faceB fa-brands fa-facebook fs-3 ps-2"></i>' : ''}
                        </a>
                        </span>
        
                        <span>
                        <a class="td-Social" target="_blank" href="https://twitter.com/${(dataOfList[i].properties.twitter) ? dataOfList[i].properties.twitter : ''}">
                        ${(dataOfList[i].properties.twitter) ? '<i id="twt" class="twit fa-brands fa-twitter fs-3"></i>' : ''}
                        </a>
                        </span>
        
                        <span>
                        <a class="td-Social" target="_blank" href="https://www.instagram.com/${(dataOfList[i].properties.instagram) ? dataOfList[i].properties.instagram : ''}">
                        ${(dataOfList[i].properties.instagram) ? '<i class="insta fa-brands fa-instagram fs-3 ps-2"></i>' : ''} 
                        </a>
                        </span>
        
                        <span>
                            <a target="_blank" href="${(dataOfList[i].properties.survey_ima) ? dataOfList[i].properties.survey_ima : null}">
                            ${(dataOfList[i].properties.survey_ima) == 'NoImage'? '' : '<i class="imgPath fa-regular fs-3 ps-2 fa-image"></i>'}
                            </a>
                        </span>
        
                    </div>
                    
                    <div class="col-md-3 text-end bg-light text-primary ">التصنيفات : ${(dataOfList[i].properties.types_arab) ? dataOfList[i].properties.types_arab : ''}</div>
        
        
                </div>
                <div class="card-footer p-2 ">
                    <div class="row">
                        <div class="col-md-8 col-sm-12 d-flex text-start">
                            <div> <a class="phone text-decoration-none">${(dataOfList[i].properties.phone1) ? '<i class="fa-solid fa-phone text-black"></i> <span class="text-black">: </span>' + dataOfList[i].properties.phone1 : ''}</a></div>
                            <div class="px-3"><a class="phone text-decoration-none">${(dataOfList[i].properties.phone2) ? dataOfList[i].properties.phone2 : ''}</a></div>
                            <div><a class="phone text-decoration-none">${(dataOfList[i].properties.phone3) ? dataOfList[i].properties.phone3 : ''}</a></div>
                            <div class="px-3"><a class="phone text-decoration-none">${(dataOfList[i].properties.phone4) ? dataOfList[i].properties.phone4 : ''}</a></div>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <div class="text-end text-muted">${(dataOfList[i].properties.keyword_ar) ? 'كلمات دالة :' + dataOfList[i].properties.keyword_ar : ''}</div>
                        </div>
                    </div>
                </div>
            </div>
           
        
        `
            }
        }
        results.innerHTML = temp;
        
        // $(".fixed-bottom").removeClass("fixed-bottom");
        $(".fixed-bottom").hide();
        
        console.log("Search by Category is Done");


    })



    //------------------------------ Loading Code by Jquery --------------------------
    $("#loadingX").fadeOut(1000, function () {
        $("body").css("overflow", "auto")
    });


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'css/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });


})