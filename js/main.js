$(document).ready(function(){

            var url_footer_disclaimer = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaDatosPantallaInicial";
            jQuery.support.cors = true;
            $.ajax({
                url: url_footer_disclaimer,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {

                    try {
                        if (data == null){}
                            
                        else {
                            $( "#footer-disclaimer" ).html(data[1].gls_disclaimer);
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });

            // TRIBUTARIO

            var url_tributario_actualidad = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=21&strBoletin=14120017&strCategoria=&blnUltimo=false&blnTodos=false";
            jQuery.support.cors = true;
            $.ajax({
                url: url_tributario_actualidad,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.ListaResumenArticulosResult.length; i++) {
                                if(data.ListaResumenArticulosResult[i].cod_area == '21' && data.ListaResumenArticulosResult[i].cod_categoria == '01'){
                                    $("#tributario-actualidad").append("<li><p class='title' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+" <span class='read-more' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>[Leer]</span></p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });                

            var url_tributario_ley = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=21&strBoletin=14120017&strCategoria=&blnUltimo=false&blnTodos=false";
            jQuery.support.cors = true;
            $.ajax({
                url: url_tributario_ley,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.ListaResumenArticulosResult.length; i++) {
                                if(data.ListaResumenArticulosResult[i].cod_area == '21' && data.ListaResumenArticulosResult[i].cod_categoria == '03'){
                                    $("#tributario-ley").append("<li><p class='title' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+" <span class='read-more' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>[Leer]</span></p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });    


            var url_tributario_normas = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=21&strBoletin=14120017&strCategoria=&blnUltimo=false&blnTodos=false";
            jQuery.support.cors = true;
            $.ajax({
                url: url_tributario_normas,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.ListaResumenArticulosResult.length; i++) {
                                if(data.ListaResumenArticulosResult[i].cod_area == '21' && data.ListaResumenArticulosResult[i].cod_categoria == '04'){
                                    $("#tributario-normas").append("<li><p class='title' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+" <span class='read-more' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>[Leer]</span></p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });            


            var url_tributario_novedades = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaNovedades";
            jQuery.support.cors = true;
            $.ajax({
                url: url_tributario_novedades,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == '21'){
                                    $("#tributario-novedades").append("<li><p>"+data[i].gls_nota+" <span class='read-more' onclick='showNotaCompleto("+data[i].cod_area+","+data[i].cod_nota+")'>[Leer]</span></p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });            


            var url_tributario_publicaciones = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaPublicaciones";
            jQuery.support.cors = true;
            $.ajax({
                url: url_tributario_publicaciones,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == '21'){
                                    $("#tributario-publicaciones").append("<li><p>"+data[i].gls_nota+" <span class='read-more' onclick='showNotaCompleto("+data[i].cod_area+","+data[i].cod_nota+")'>[Leer]</span></p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });                 

            var url_tributaria_area_tributaria = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaAbogadosBoletin";
            jQuery.support.cors = true;
            $.ajax({
                url: url_tributaria_area_tributaria,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == '21'){
                                    $("#tributaria-area-tributaria").append("<li class='toLink'><a href='mailto:"+data[i].gls_mail+"'>"+data[i].gls_abogado+"</a></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });            

            var url_tributario_ediciones = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaEdicionesAnteriores";
            jQuery.support.cors = true;
            $.ajax({
                url: url_tributario_ediciones,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    
                    try {
                        if (data == null){}
                            
                        else {
                            var codArea = 21;
                            var html = setEdiciones(data,codArea);
                            $("#tributario-ediciones").append(html);
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });              

            var url_tributario_frecuentes = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaTagsFrecuente";
            jQuery.support.cors = true;
            $.ajax({
                url: url_tributario_frecuentes,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            var codArea = '21';
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == codArea){
                                    if(data[i].num_tag >= 10){
                                        $("#tributario-frecuentes").append("<li class='toLink' onclick='getResumenArticulo(\""+codArea+"\",\""+data[i].gls_tag+"\",2)'><u><strong>"+data[i].gls_tag+"</strong></u></li>"); 
                                    }else{
                                        $("#tributario-frecuentes").append("<li class='toLink' onclick='getResumenArticulo(\""+codArea+"\",\""+data[i].gls_tag+"\",2)'>"+data[i].gls_tag+"</li>");
                                    }
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });              

            // LABORAL
            var url_laboral_actualidad = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=01&strBoletin=15010001&strCategoria=&blnUltimo=false&blnTodos=false";
            jQuery.support.cors = true;
            $.ajax({
                url: url_laboral_actualidad,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.ListaResumenArticulosResult.length; i++) {
                                if(data.ListaResumenArticulosResult[i].cod_area == '01' && data.ListaResumenArticulosResult[i].cod_categoria == '01'){
                                    $("#laboral-actualidad").append("<li><p class='title' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+" <span class='read-more' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>[Leer]</span></p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });

            var url_laboral_pronunciamientos = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=01&strBoletin=15010001&strCategoria=&blnUltimo=false&blnTodos=false";
            jQuery.support.cors = true;
            $.ajax({
                url: url_laboral_pronunciamientos,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.ListaResumenArticulosResult.length; i++) {
                                if(data.ListaResumenArticulosResult[i].cod_area == '01' && data.ListaResumenArticulosResult[i].cod_categoria == '06'){
                                    $("#laboral-pronunciamientos").append("<li><p class='title' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+" <span class='read-more' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>[Leer]</span></p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });



            var url_laboral_alerta = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=01&strBoletin=15010001&strCategoria=&blnUltimo=false&blnTodos=false";
            jQuery.support.cors = true;
            $.ajax({
                url: url_laboral_alerta,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.ListaResumenArticulosResult.length; i++) {
                                if(data.ListaResumenArticulosResult[i].cod_area == '01' && data.ListaResumenArticulosResult[i].cod_categoria == '07'){
                                    $("#laboral-alerta").append("<li><p class='title' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+" <span class='read-more' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>[Leer]</span></p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });



            var url_laboral_novedades = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaNovedades";
            jQuery.support.cors = true;
            $.ajax({
                url: url_laboral_novedades,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == '01'){
                                    $("#laboral-novedades").append("<li><p>"+data[i].gls_nota+" <span class='read-more' onclick='showNotaCompleto("+data[i].cod_area+","+data[i].cod_nota+")'>[Leer]</span></p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });



            var url_laboral_publicaciones = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaPublicaciones";
            jQuery.support.cors = true;
            $.ajax({
                url: url_laboral_publicaciones,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == '01'){
                                    $("#laboral-publicaciones").append("<li><p>"+data[i].gls_nota+" <span class='read-more' onclick='showNotaCompleto("+data[i].cod_area+","+data[i].cod_nota+")'>[Leer]</span></p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });            


            var url_laboral_area_tributaria = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaAbogadosBoletin";
            jQuery.support.cors = true;
            $.ajax({
                url: url_laboral_area_tributaria,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == '01'){
                                    $("#laboral-area-tributaria").append("<li class='toLink'><a href='mailto:"+data[i].gls_mail+"'>"+data[i].gls_abogado+"</a></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });



            var url_laboral_ediciones = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaEdicionesAnteriores";
            jQuery.support.cors = true;
            $.ajax({
                url: url_laboral_ediciones,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            var codArea = "01";console.log(codArea);
                            var html = setEdiciones(data,codArea);
                            $("#laboral-ediciones").append(html);                            
                            /*for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == '01'){
                                    $("#laboral-ediciones").append("<li>"+data[i].gls_boletin+"</li>");
                                }
                            }  */                         
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });  



            var url_laboral_frecuentes = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaTagsFrecuente";
            jQuery.support.cors = true;
            $.ajax({
                url: url_laboral_frecuentes,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            var codArea = '01';
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == codArea){
                                    if(data[i].num_tag >= 10){
                                        $("#laboral-frecuentes").append("<li class='toLink' onclick='getResumenArticulo(\""+codArea+"\",\""+data[i].gls_tag+"\",2)'><u><strong>"+data[i].gls_tag+"</strong></u></li>"); 
                                    }else{
                                        $("#laboral-frecuentes").append("<li class='toLink' onclick='getResumenArticulo(\""+codArea+"\",\""+data[i].gls_tag+"\",2)'>"+data[i].gls_tag+"</li>");
                                    }
                                }
                            }                                                         
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });  



            // AMBIENTAL

            var url_ambiental_actualidad = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=12&strBoletin=15010002&strCategoria=&blnUltimo=false&blnTodos=false";
            jQuery.support.cors = true;
            $.ajax({
                url: url_ambiental_actualidad,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.ListaResumenArticulosResult.length; i++) {
                                if(data.ListaResumenArticulosResult[i].cod_area == '12' && data.ListaResumenArticulosResult[i].cod_categoria == '01'){
                                    $("#ambiental-actualidad").append("<li><p class='title' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+" <span class='read-more' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>[Leer]</span></p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });            

            var url_ambiental_radar = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=12&strBoletin=15010002&strCategoria=&blnUltimo=false&blnTodos=false";
            jQuery.support.cors = true;
            $.ajax({
                url: url_ambiental_radar,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.ListaResumenArticulosResult.length; i++) {
                                if(data.ListaResumenArticulosResult[i].cod_area == '12' && data.ListaResumenArticulosResult[i].cod_categoria == '08'){
                                    $("#ambiental-radar").append("<li><p class='title' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+" <span class='read-more' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>[Leer]</span></p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });


            var url_ambiental_normas = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=12&strBoletin=15010002&strCategoria=&blnUltimo=false&blnTodos=false";
            jQuery.support.cors = true;
            $.ajax({
                url: url_ambiental_normas,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.ListaResumenArticulosResult.length; i++) {
                                if(data.ListaResumenArticulosResult[i].cod_area == '12' && data.ListaResumenArticulosResult[i].cod_categoria == '04'){
                                    $("#ambiental-normas").append("<li><p class='title' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+" <span class='read-more' onclick='showArticuloCompleto("+data.ListaResumenArticulosResult[i].cod_area+","+data.ListaResumenArticulosResult[i].cod_articulo+")'>[Leer]</span></p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });


           var url_ambiental_novedades = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaNovedades";
            jQuery.support.cors = true;
            $.ajax({
                url: url_ambiental_novedades,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == '12'){
                                    $("#ambiental-novedades").append("<li><p>"+data[i].gls_nota+" <span class='read-more' onclick='showNotaCompleto("+data[i].cod_area+","+data[i].cod_nota+")'>[Leer]</span></p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });



            var url_ambiental_publicaciones = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaPublicaciones";
            jQuery.support.cors = true;
            $.ajax({
                url: url_ambiental_publicaciones,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == '12'){
                                    $("#ambiental-publicaciones").append("<li><p>"+data[i].gls_nota+" <span class='read-more' onclick='showNotaCompleto("+data[i].cod_area+","+data[i].cod_nota+")'>[Leer]</span></p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });                

            var url_ambiental_area_tributaria = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaAbogadosBoletin";
            jQuery.support.cors = true;
            $.ajax({
                url: url_ambiental_area_tributaria,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == '12'){
                                    $("#ambiental-area-tributaria").append("<li class='toLink'><a href='mailto:"+data[i].gls_mail+"'>"+data[i].gls_abogado+"</a></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });


            var url_ambiental_ediciones = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaEdicionesAnteriores";
            jQuery.support.cors = true;
            $.ajax({
                url: url_ambiental_ediciones,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            var html = setEdiciones(data,"12");
                            $("#ambiental-ediciones").append(html);                           
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });              


            var url_ambiental_frecuentes = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaTagsFrecuente";
            jQuery.support.cors = true;
            $.ajax({
                url: url_ambiental_frecuentes,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    try {
                        if (data == null){}
                            
                        else {
                            var codArea = '12';
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == codArea){
                                    if(data[i].num_tag >= 10){
                                        $("#ambiental-frecuentes").append("<li class='toLink' onclick='getResumenArticulo(\""+codArea+"\",\""+data[i].gls_tag+"\",2)'><u><strong>"+data[i].gls_tag+"</strong></u></li>"); 
                                    }else{
                                        $("#ambiental-frecuentes").append("<li class='toLink' onclick='getResumenArticulo(\""+codArea+"\",\""+data[i].gls_tag+"\",2)'>"+data[i].gls_tag+"</li>");
                                    }
                                }
                            }                           
                        }
                    } catch (e) {
                        // alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(errorThrown);
                }
            });              
})

            var existeObj = function (obj){
                if(typeof obj != 'undefined' || obj != null){
                    return true;
                }else{
                    return false;
                }

            }

            var getResumenArticulo = function  (a,strCod,type) {
                var url_ = "";
                var area = pad(a,2);
                var stringBuscar = "";
                var objBuscar;
                if ( type == 1){
                    url_ = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea="+area+"&strBoletin="+strCod+"&strCategoria=&blnUltimo=false&blnTodos=false";
                }else if ( type == 2){
                    url_ = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaBusquedaBoletines?strArea="+area+"&strTextoBusqueda=&strTag="+strCod;
                }else if ( type == 3){
                    objBuscar = $("#"+strCod)
                    stringBuscar = objBuscar.val(); objBuscar.val("Buscando...");
                    url_ = "http://www.mafirmapublicaciones.com/Servicios/BoletinMovilService.svc/ListaBusquedaBoletines?strArea="+area+"&strTextoBusqueda="+stringBuscar+"&strTag=";
                };
                
                jQuery.support.cors = true;
                if ( area == "01") {
                    var firstObj = $("#laboral-actualidad");
                    var secondObj = $("#laboral-pronunciamientos");
                    var thirdObj = $("#laboral-alerta" );                   
                }else if ( area == "12") {
                    var firstObj = $("#ambiental-actualidad");
                    var secondObj = $("#ambiental-radar");
                    var thirdObj = $("#ambiental-normas");                    
                 
                }else if ( area == "21") {
                    var firstObj = $("#tributario-actualidad");
                    var secondObj = $("#tributario-ley");
                    var thirdObj = $("#tributario-normas"); 
                }


                var firstHtml = "";
                var secondHtml = "";
                var thirdHtml = "";
                $.ajax({
                    url: url_,
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        firstObj.empty();
                        firstObj.hide();
                        secondObj.empty();
                        secondObj.hide();
                        thirdObj.empty();
                        thirdObj.hide();
                        try {
                            if (data == null){ }
                            else { 
                                var resultJson;
                                $.each(data, function(i, r){
                                    resultJson = r;
                                })
                                if(type == 3)  {  if (resultJson.length == 0) { objBuscar.val("No hay resultados"); } else { objBuscar.val(stringBuscar); }; }
                                
                                for (var i = 0 ; i < resultJson.length ; i++) {                    
                                    if (resultJson[i].cod_categoria == '01'){
                                        firstHtml += "<li><p class='title' onclick='showArticuloCompleto("+resultJson[i].cod_area+","+resultJson[i].cod_articulo+")'>"+resultJson[i].gls_articulo+"</p><p>"+ ( (type == 2) ? tagSpan(resultJson[i].gls_resumen,strCod) : resultJson[i].gls_resumen )+" <span class='read-more' onclick='showArticuloCompleto("+resultJson[i].cod_area+","+resultJson[i].cod_articulo+")'>[Leer]</span></p></li>";
                                    }else if(resultJson[i].cod_categoria == '03'){
                                        secondHtml += "<li><p class='title' onclick='showArticuloCompleto("+resultJson[i].cod_area+","+resultJson[i].cod_articulo+")'>"+resultJson[i].gls_articulo+"</p><p>"+( (type == 2) ? tagSpan(resultJson[i].gls_resumen,strCod) : resultJson[i].gls_resumen )+" <span class='read-more' onclick='showArticuloCompleto("+resultJson[i].cod_area+","+resultJson[i].cod_articulo+")'>[Leer]</span></p></li>";
                                    }else if(resultJson[i].cod_categoria == '04'){
                                        thirdHtml += "<li><p class='title' onclick='showArticuloCompleto("+resultJson[i].cod_area+","+resultJson[i].cod_articulo+")'>"+resultJson[i].gls_articulo+"</p><p>"+ ( (type == 2) ? tagSpan(resultJson[i].gls_resumen,strCod) : resultJson[i].gls_resumen )+" <span class='read-more' onclick='showArticuloCompleto("+resultJson[i].cod_area+","+resultJson[i].cod_articulo+")'>[Leer]</span></p></li>";
                                    }else if(resultJson[i].cod_categoria == '06'){
                                        secondHtml += "<li><p class='title' onclick='showArticuloCompleto("+resultJson[i].cod_area+","+resultJson[i].cod_articulo+")'>"+resultJson[i].gls_articulo+"</p><p>"+( (type == 2) ? tagSpan(resultJson[i].gls_resumen,strCod) : resultJson[i].gls_resumen )+" <span class='read-more' onclick='showArticuloCompleto("+resultJson[i].cod_area+","+resultJson[i].cod_articulo+")'>[Leer]</span></p></li>";
                                    }else if(resultJson[i].cod_categoria == '07'){
                                        thirdHtml += "<li><p class='title' onclick='showArticuloCompleto("+resultJson[i].cod_area+","+resultJson[i].cod_articulo+")'>"+resultJson[i].gls_articulo+"</p><p>"+ ( (type == 2) ? tagSpan(resultJson[i].gls_resumen,strCod) : resultJson[i].gls_resumen )+" <span class='read-more' onclick='showArticuloCompleto("+resultJson[i].cod_area+","+resultJson[i].cod_articulo+")'>[Leer]</span></p></li>";
                                    }else if(resultJson[i].cod_categoria == '08'){
                                        secondHtml += "<li><p class='title' onclick='showArticuloCompleto("+resultJson[i].cod_area+","+resultJson[i].cod_articulo+")'>"+resultJson[i].gls_articulo+"</p><p>"+( (type == 2) ? tagSpan(resultJson[i].gls_resumen,strCod) : resultJson[i].gls_resumen )+" <span class='read-more' onclick='showArticuloCompleto("+resultJson[i].cod_area+","+resultJson[i].cod_articulo+")'>[Leer]</span></p></li>";
                                    }
                                };

                                if (firstHtml != "") {
                                    firstObj.append(firstHtml);
                                    firstObj.show();                                    
                                };
                                if (secondHtml != "") {
                                    secondObj.append(secondHtml);
                                    secondObj.show();                                    
                                };
                                if (thirdHtml != "") {
                                    thirdObj.append(thirdHtml);
                                    thirdObj.show();                                    
                                };
                                                       
                            }
                        } catch (e) {
                            // alert(e.message);
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        // alert(errorThrown);
                    }
                }); 


            }

            var pad = function (num, size) {
                var s = "000000000" + num;
                return s.substr(s.length-size);
            }

            var setEdiciones = function (data,codArea) {
                var arrayGrupos = [];
                for(var i=0; i<data.length; i++) {
                    if(data[i].cod_area == codArea){
                        var ano = ""+data[i].num_año;
                        if(existeObj(arrayGrupos[ano])){
                            if(existeObj(arrayGrupos[ano][data[i].gls_mes])) {
                                arrayGrupos[ano][data[i].gls_mes].push(data[i].gls_boletin+'|'+data[i].cod_boletin);
                            }else{
                                arrayGrupos[ano][data[i].gls_mes] = [];
                                arrayGrupos[ano][data[i].gls_mes].push(data[i].gls_boletin+'|'+data[i].cod_boletin);
                            }
                        }else{
                            arrayGrupos[ano] = [];
                            arrayGrupos[ano][data[i].gls_mes] = [];
                            arrayGrupos[ano][data[i].gls_mes].push(data[i].gls_boletin+'|'+data[i].cod_boletin);
                        }
                    }
                }

                var html;
                var mesesArray = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre'];
                html = '<div class="panel-group" id="accordionAno" role="tablist" aria-multiselectable="false">';
                $.each(arrayGrupos, function(index, meses){
                    if (existeObj(arrayGrupos[index]) ){
                          html += '<div class="panel panel-default">';
                            html += '<div class="panel-heading" role="tab" id="heading'+index+'">';
                              html += '<h4 class="panel-title toLink">';
                                html += '<a data-toggle="collapse" data-parent="#accordionAno" href="#collapseAno'+index+'" aria-expanded="false" aria-controls="collapseAno'+index+'">';
                                  html +=index ;
                                html += '</a>';
                              html += '</h4>';
                            html += '</div>';
                            html += '<div id="collapseAno'+index+'" class="panel-collapse collapse" role="tablist" aria-labelledby="heading'+index+'">';
                              html += '<div class="panel-body">';

                                for (var i =0 ; i<mesesArray.length; i++) {
                                    
                                    if (existeObj(arrayGrupos[index][mesesArray[i]]) ){

                                        html += '<div class="accordion aChild" id="accordionChild'+index+'_'+i+'" >';
                                          html += '<div class="accordion-group">';
                                            html += '<div class="accordion-heading">';
                                              html += '<a class="accordion-toggle toLink" data-toggle="collapse" data-parent="#collapseAno'+index+'" href="#collapseInner'+index+'_'+i+'">';
                                                html += mesesArray[i];
                                              html += '</a>';
                                            html += '</div>';
                                            html += '<div id="collapseInner'+index+'_'+i+'" class="accordion-body collapse">';
                                              html += '<div class="accordion-inner">';
                                                    var explode;
                                                    $.each(arrayGrupos[index][mesesArray[i]], function(ii, kk){
                                                        explode = kk.split('|');
                                                        html += '<h5><a class="toLink" href="javascript:void(0)" data-toggle="collapse" data-parent="#accordionChild'+index+'_'+i+'" onclick="getResumenArticulo('+codArea+','+explode[1]+',1)">'+explode[0]+'</a></h5>';

                                                    });  

                                              html += '</div>';
                                            html += '</div>';
                                          html += '</div>';

                                        html += '</div>';
                                    }

                                };

                              html += '</div>';
                            html += '</div>';
                          html += '</div>';
                        
                    }


                })
                html += '</div>';  
                return html;              
                // body...
            }

            var tagSpan = function (textt,string) {
                var words = string.split(" ");
                var newText = textt;
                for (var i = 0; i < words.length; i++) {
                    newText = newText.replace(new RegExp(words[i],'i'),'<span class="tags">'+words[i]+'</span>');console.log(words[i]+' - '+newText);
                   
                };
                return newText;
            }

            var showArticuloCompleto = function  (area, strCod) {
                if (area == "01") {
                    window.open("http://www.mafirmapublicaciones.com/Visores/articulolaboral.aspx?a="+area+"|"+strCod,"_blank");
                }else if (area == "12") {
                    window.open("http://www.mafirmapublicaciones.com/Visores/articuloambiental.aspx?a="+area+"|"+strCod,"_blank");
                }else if (area == "21") {
                    window.open("http://www.mafirmapublicaciones.com/Visores/articulotributario.aspx?a="+area+"|"+strCod,"_blank");
                };                
            }

            var showNotaCompleto = function  (area, strCod) {
                if (area == "01") {
                    window.open("http://www.mafirmapublicaciones.com/Visores/notalaboral.aspx?a="+area+"|"+strCod,"_blank");
                }else if (area == "12") {
                    window.open("http://www.mafirmapublicaciones.com/Visores/notaambiental.aspx?a="+area+"|"+strCod,"_blank");
                }else if (area == "21") {
                    window.open("http://www.mafirmapublicaciones.com/Visores/notatributario.aspx?a="+area+"|"+strCod,"_blank");
                };
                
            }            