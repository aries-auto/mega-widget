var REQUIRED_JQUERY = 1.9;
var JQUERY_INJECTED = false;
var WIDGET_LOADED = false;
var API_HOST = 'http://ariesautoapi.curtmfg.com';
var API_KEY = '883d4046-8b96-11e4-9475-42010af00d4e';
var LOOKUP_HTML = Handlebars.compile(`
    <div class="form-group">
    {{#if collections}}
        <label class="sr-only" for="aries-widget-collection">Select Category</label><select class="aries-widget-dropdown collection form-control"><option value="">- Select Category - </option>{{#each collections}}<option>{{toUpperCase .}}</option>{{/each}}</select>
    {{/if}}
    {{#if available_years}}
        <label class="sr-only" for="aries-widget-years">Select Vehicle Year</label><select class="aries-widget-dropdown form-control year"><option value="">- Select Vehicle Year - </option>{{#each available_years}}<option>{{.}}</option>{{/each}}</select>
    {{/if}}
    {{#if available_makes}}
        <label class="sr-only" for="aries-widget-makes">Select Vehicle Make</label><select class="aries-widget-dropdown form-control make"><option value="">- Select Vehicle Make - </option>{{#each available_makes}}<option>{{toUpperCase .}}</option>{{/each}}</select>
    {{/if}}
    {{#if available_models}}
        <label class="sr-only" for="aries-widget-models">Select Vehicle Model</label><select class="aries-widget-dropdown form-control model"><option value="">- Select Vehicle Model - </option>{{#each available_models}}<option>{{toUpperCase .}}</option>{{/each}}</select>
    {{/if}}
    {{#if available_styles}}
        <label class="sr-only" for="aries-widget-styles">Select Vehicle Style</label><select class="aries-widget-dropdown form-control style"><option value="">- Select Vehicle Style - </option>{{#each available_styles}}<option>{{toUpperCase .}}</option>{{/each}}</select>
    {{/if}}
    </div>


    {{#if parts}}
    <div class="part-results">
        <div class="result-info">
            <div class="col-md-4 total-results">
                <span>Total Results: </span>
                <span>{{./parts.length}}</span>
            </div>
            <div class="col-md-8">
                <span>
                    {{toUpperCase ././vehicle.collection}} {{././vehicle.year}} {{toUpperCase ././vehicle.make}} {{toUpperCase ././vehicle.model}} {{toUpperCase ././vehicle.style}}
                </span>
            </div>
            <div class="clearfix"></div>
        </div>
        {{#each ./parts}}
            <div class="part">
                <div class="row">
                    <div class="col-md-8">
                        <h3>{{this.short_description}} #{{this.oldPartNumber}}</h3>
                    </div>
                    <div class="col-md-4">
                        <span class="price">{{getPrice this}}</span>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 images">
                        <img src="{{getImage this.images}}" alt="{{this.short_description}}" class="main img-thumbnail">
                    </div>
                    <div class="col-md-8">
                        <table class="table table-striped table-bordered table-condensed">
                            <tbody>
                            {{#each this.attributes}}
                                <tr>
                                    <td>{{key}}</td>
                                    <td>{{value}}</td>
                                </tr>
                            {{/each}}
                            </tbody>
                        </table>
                        <ul>
                        {{#each this.content}}
                            {{#if_eq this.contentType.Type 'Bullet'}}
                            <li>{{this.text}}</li>
                            {{/if_eq}}
                        {{/each}}
                    </div>
                </div>
            </div>
        {{/each}}
    </div>
    {{/if}}
`);

var VEHICLE = {};

function addStylesheet(){
    var dataStyle = 'index';
    var styl = document.getElementById('aries-widget').getAttribute('data-lookupstyle');
    if (styl !== null && styl !== '') {
        dataStyle = styl;
    }

    if (!document.createStylesheet){
        var nss = document.createElement('link');
        nss.rel = 'stylesheet';
        nss.href = dataStyle;
        var head = document.getElementsByTagName('head');
        if (head !== undefined && head.length > 0) {
            head[0].appendChild(nss);
        }
        return;
    }

    document.createStylesheet(dataStyle);

    return;
}

function addJQuery() {
    if(typeof(jQuery) == 'undefined' || parseFloat(jQuery.fn.jquery) < REQUIRED_JQUERY){ // jQuery has not been loaded
        if(!JQUERY_INJECTED){
            document.write('<scr'+'ipt type=\'text/javascript\' src=\'https://ajax.googleapis.com/ajax/libs/jquery/' + REQUIRED_JQUERY + '/jquery.min.js\'></scr' + 'ipt>');
            JQUERY_INJECTED = true;
        }
        setTimeout('addJQuery()', 50);
    }
}

// This function will return all of the GET data inside the 'vars' array
function getUrlVars(){
    if (window.location.href.indexOf('?') === -1){
        return [];
    }

    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    jQuery.each(hashes,function(i, hash){
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
    });
    return vars;
}

// This function will return the GET variable declared in the 'name' variable
// @param : GET variable name to be retrieved
function getUrlVar(name){
    var hashes = jQuery.getUrlVars();
    if(hashes !== undefined && hashes[name] !== undefined){
        return hashes[name];
    }else{
        return '';
    }
}

function initialize() {
    addStylesheet();
    addJQuery();

    if(WIDGET_LOADED) {
        return;
    }

    jQuery.extend({
			getUrlVars: getUrlVars,
			getUrlVar: getUrlVar
	});
    jQuery.fn.sort = function() {
        return this.pushStack( [].sort.apply(this, arguments), []);
    };
    Handlebars.registerHelper('toUpperCase', function(val){
        if(val){
            return val.toUpperCase();
        }else{
            return '';
        }
    });
    Handlebars.registerHelper('getImage', function(images){
        if(images === undefined) {
            return '';
        }

        for (var i = 0; i < images.length; i++) {
            var img = images[i];
            if(img.sort === 'a' && img.height > 75){
                return img.path.Scheme + '://' + img.path.Host + img.path.Path;
            }
        }
    });
    Handlebars.registerHelper('getPrice', function(part){
        if(part === undefined) {
            return '';
        }

        if (part.customer.price > 0) {
            return '$' + part.customer.price;
        }

        for (var i = 0; i < part.pricing.length; i++) {
            var pr = part.pricing[i];
            if (pr.type === 'List'){
                return '$' + pr.price;
            }
        }
    });
    Handlebars.registerHelper('if_eq', function(a, b, block) {
        console.log(a, b);
        if(a === b) {
            return block.fn(this)
        }
        return block.inverse(this);
    });

    var tempVehicle = parseQueryString();
    if (vehicleIsValid(tempVehicle)) {
        VEHICLE = tempVehicle;
        getVehicle(function(){
            jQuery('.aries-widget-dropdown').on('change', changeHandler);
        });
    } else {
        getCollections(function(data){
            var obj = {collections: data, vehicle: VEHICLE};
            var colHTML = LOOKUP_HTML(obj);
            jQuery('.aries-widget-dropdown').remove();
            jQuery('#aries-widget').html(colHTML);
            jQuery('.aries-widget-dropdown').on('change', changeHandler);
        });
    }

    WIDGET_LOADED = true;
}

function parseQueryString() {
    var tmp = {};
    var hashes = jQuery.getUrlVars();

    if (hashes['category'] === undefined){
        return {};
    }
    tmp.collection = decodeURIComponent(hashes['category']);

    if (hashes['year'] === undefined){
        return {};
    }
    tmp.year = decodeURIComponent(hashes['year']);

    if (hashes['make'] === undefined){
        return {};
    }
    tmp.make = decodeURIComponent(hashes['make']);

    if (hashes['model'] === undefined){
        return {};
    }
    tmp.model = decodeURIComponent(hashes['model']);

    if (hashes['style'] === undefined){
        return {};
    }
    tmp.style = decodeURIComponent(hashes['style']);

    return tmp;
}

function vehicleIsValid(v) {
    if (v.collection === undefined || v.collection === ''){
        return false;
    }
    if (v.year === undefined || v.year === ''){
        return false;
    }
    if (v.make === undefined || v.make === ''){
        return false;
    }
    if (v.model === undefined || v.model === ''){
        return false;
    }
    if (v.style === undefined || v.style === ''){
        return false;
    }

    return true;
}

function changeHandler(){
    var val = $(this).val();
    if (val.length === 0){
        return;
    }

    if ($(this).hasClass('collection')){
        VEHICLE.collection = val.toLowerCase();
    } else if ($(this).hasClass('year')){
        VEHICLE.year = val.toLowerCase();
    } else if ($(this).hasClass('make')){
        VEHICLE.make = val.toLowerCase();
    } else if ($(this).hasClass('model')){
        VEHICLE.model = val.toLowerCase();
    } else if ($(this).hasClass('style')){
        VEHICLE.style = val.toLowerCase();
    }
    getVehicle(function(){
        jQuery('.aries-widget-dropdown').on('change', changeHandler);
    });
}

function getCollections(callback) {
    var req = jQuery.ajax({
        type: 'GET',
        url: API_HOST + '/vehicle/mongo/cols',
        dataType: 'json',
        data: {
            key: API_KEY
        }
    });

    req.done(function(data) {
        callback(data);
    });
}

function getVehicle(callback) {
    var req = jQuery.ajax({
        type: 'POST',
        url: API_HOST + '/vehicle/mongo?key=' + API_KEY,
        dataType: 'json',
        data: jQuery.param(VEHICLE)
    });

    req.done(function(data) {
        getCollections(function(cols){
            data.vehicle = VEHICLE;
            if (data.parts && data.parts.length > 0) {
                data.collections = cols;
                VEHICLE = {};
            }

            var yearHTML = LOOKUP_HTML(data);
            jQuery('#aries-widget .form-group').remove();
            jQuery('#aries-widget').html(yearHTML);

            callback();
        });

    });
}

initialize();
