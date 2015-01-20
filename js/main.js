$(document).ready(function(){

            var url_footer_disclaimer = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaDatosPantallaInicial";
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
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });

            // TRIBUTARIO

            var url_tributario_actualidad = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=21&strBoletin=14120017&strCategoria=&blnUltimo=false&blnTodos=false";
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
                                    $("#tributario-actualidad").append("<li><p class='title'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+"</p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });                

            var url_tributario_ley = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=21&strBoletin=14120017&strCategoria=&blnUltimo=false&blnTodos=false";
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
                                    $("#tributario-ley").append("<li><p class='title'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+"</p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });    


            var url_tributario_normas = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=21&strBoletin=14120017&strCategoria=&blnUltimo=false&blnTodos=false";
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
                                    $("#tributario-normas").append("<li><p class='title'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+"</p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });            


            var url_tributario_novedades = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaNovedades";
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
                                    $("#tributario-novedades").append("<li><p>"+data[i].gls_nota+"</p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });            


            var url_tributario_publicaciones = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaPublicaciones";
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
                                    $("#tributario-publicaciones").append("<li><p>"+data[i].gls_nota+"</p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });                 

            var url_tributaria_area_tributaria = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaAbogadosBoletin";
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
                                    $("#tributaria-area-tributaria").append("<li><a href='mailto:"+data[i].gls_mail+"'>"+data[i].gls_abogado+"</a></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });            

            var url_tributario_ediciones = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaEdicionesAnteriores";
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
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == '21'){
                                    $("#tributario-ediciones").append("<li>"+data[i].gls_boletin+"</li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });              

            var url_tributario_frecuentes = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaTagsFrecuente";
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
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == '21'){
                                    $("#tributario-frecuentes").append("<li>"+data[i].gls_tag+"</li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });              

            // LABORAL
            var url_laboral_actualidad = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=01&strBoletin=15010001&strCategoria=&blnUltimo=false&blnTodos=false";
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
                                    $("#laboral-actualidad").append("<li><p class='title'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+"</p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });

            var url_laboral_pronunciamientos = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=01&strBoletin=15010001&strCategoria=&blnUltimo=false&blnTodos=false";
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
                                    $("#laboral-pronunciamientos").append("<li><p class='title'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+"</p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });



            var url_laboral_alerta = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=01&strBoletin=15010001&strCategoria=&blnUltimo=false&blnTodos=false";
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
                                    $("#laboral-alerta").append("<li><p class='title'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+"</p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });



            var url_laboral_novedades = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaNovedades";
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
                                    $("#laboral-novedades").append("<li><p>"+data[i].gls_nota+"</p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });



            var url_laboral_publicaciones = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaPublicaciones";
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
                                    $("#laboral-publicaciones").append("<li><p>"+data[i].gls_nota+"</p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });            


            var url_laboral_area_tributaria = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaAbogadosBoletin";
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
                                    $("#laboral-area-tributaria").append("<li><a href='mailto:"+data[i].gls_mail+"'>"+data[i].gls_abogado+"</a></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });



            var url_laboral_ediciones = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaEdicionesAnteriores";
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
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == '01'){
                                    $("#laboral-ediciones").append("<li>"+data[i].gls_boletin+"</li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });  



            var url_laboral_frecuentes = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaTagsFrecuente";
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
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == '01'){
                                    $("#laboral-frecuentes").append("<li>"+data[i].gls_tag+"</li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });  



            // AMBIENTAL

            var url_ambiental_actualidad = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=12&strBoletin=15010002&strCategoria=&blnUltimo=false&blnTodos=false";
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
                                    $("#ambiental-actualidad").append("<li><p class='title'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+"</p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });            

            var url_ambiental_radar = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=12&strBoletin=15010002&strCategoria=&blnUltimo=false&blnTodos=false";
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
                                    $("#ambiental-radar").append("<li><p class='title'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+"</p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });


            var url_ambiental_normas = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaResumenArticulos?strArea=12&strBoletin=15010002&strCategoria=&blnUltimo=false&blnTodos=false";
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
                                    $("#ambiental-normas").append("<li><p class='title'>"+data.ListaResumenArticulosResult[i].gls_articulo+"</p><p>"+data.ListaResumenArticulosResult[i].gls_resumen+"</p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });


           var url_ambiental_novedades = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaNovedades";
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
                                    $("#ambiental-novedades").append("<li><p>"+data[i].gls_nota+"</p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });



            var url_ambiental_publicaciones = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaPublicaciones";
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
                                    $("#ambiental-publicaciones").append("<li><p>"+data[i].gls_nota+"</p></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });                

            var url_ambiental_area_tributaria = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaAbogadosBoletin";
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
                                    $("#ambiental-area-tributaria").append("<li><a href='mailto:"+data[i].gls_mail+"'>"+data[i].gls_abogado+"</a></li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });


            var url_ambiental_ediciones = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaEdicionesAnteriores";
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
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == '12'){
                                    $("#ambiental-ediciones").append("<li>"+data[i].gls_boletin+"</li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });              


            var url_ambiental_frecuentes = "http://mafirmapublicaciones.com.rws1.my-hosting-panel.com/Servicios/BoletinMovilService.svc/ListaTagsFrecuente";
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
                            for(var i=0; i<data.length; i++) {
                                if(data[i].cod_area == '12'){
                                    $("#ambiental-frecuentes").append("<li>"+data[i].gls_tag+"</li>");
                                }
                            }                            
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });              


})
