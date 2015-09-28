var REQUIRED_JQUERY = 1.9;
var JQUERY_INJECTED = false;
var WIDGET_LOADED = false;
var SHOPPING_CART = 'none';
var CUSTOMER_EMAIL = '';
var CART_LINK = '';
var IMG_SEL = '';
var API_HOST = 'http://ariesautoapi.curtmfg.com';
var API_KEY = '883d4046-8b96-11e4-9475-42010af00d4e';
var LOOKUP_HTML = Handlebars.compile(`
	{{#registerPartial "paypal"}}
		<form class="paypal" target="_blank" action="https://www.paypal.com/cgi-bin/webscr" method="post">
			<div class="row">
				<div class="col-md-5">
					<span class="price accPrice">{{getPrice this}}</span>
					<label>Qty</label>
					<select name="quantity" style="min-width:40px;display:inline">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</div>
				<div class="col-md-7">
					<input type="hidden" name="item_number" value="{{this.short_description}} #{{this.oldPartNumber}}" />
					<input type="hidden" name="cmd" value="_xclick" />
					<input type="hidden" name="no_note" value="1" />
					<input type="hidden" name="business" value="{{../cart.email}}" />
					<input type="hidden" name="currency_code" value="USD" />
					<input type="hidden" name="return" value="{{../cart.location}}" />
					<input type="hidden" name="item_name" value="{{this.short_description}}" />
					<input type="hidden" name="amount" value="{{getPrice this}}" />
					<input type="image" name="submit" src="https://www.paypalobjects.com/webstatic/en_US/btn/btn_pponly_142x27.png" border="0" align="top" alt="Check out with PayPal" />
				</div>
			</div>
		</form>
	{{/registerPartial}}
	{{#registerPartial "custom"}}
		{{#if_eq ../cart.link ''}}
		{{else}}
		<span class="price">{{getPrice this}}</span>
		<a href="{{generateCartLink ../cart.link this.customer.cart_reference}}" title="Buy Now">
			<img src="https://labs.curtmfg.com/widget_v2/img/checkout.png" alt="Checkout" />
		</a>
		{{/if_eq}}
	{{/registerPartial}}
	{{#registerPartial "nuera"}}
		<span class="price"><span>Price:</span>{{getPrice this}}</span>
		<form class="nuera" method="post" action="{{generateCartLink ../cart.link this.oldPartNumber}}">
			<input name="VariantStyle" id="VariantStyle" type="hidden" value="0" />
			<input name="IsWishList" id="IsWishList" type="hidden" value="0" />
			<input name="IsGiftRegistry" id="IsGiftRegistry" type="hidden" value="0" />
			<input name="UpsellProducts" id="UpsellProducts" type="hidden" value="" />
			<input name="CartRecID" id="CartRecID" type="hidden" value="0" />
			<input name="ProductID" id="ProductID" type="hidden" value="{{this.customer.cart_reference}}" />
			<input name="VariantID" id="VariantID" type="hidden" value="0" />
			<small>Quantity:</small>
			<input name="Quantity" id="Quantity" type="text" value="1" size="3" maxlength="4" />
			<input type="submit" value="Add to Cart" />
		</form>
	{{/registerPartial}}
	{{#registerPartial "fasttrackracks"}}
		<form action="http://www.fasttrackracks.com/store/addtocart.aspx" method="post">
			<div style="padding-top:15px"><span class="price accPrice">{{getPrice this}}</span>
				<label>Qty</label>
				<select name="qty" style="min-width:40px;display:inline">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
			</div>
			<input type="hidden" name="return" value="{{../cart.location}}" />
			<input type="hidden" name="imageurl" value="{{getImage this.images}}" />
			<input type="hidden" name="ItemNbr" value="{{this.short_description}} #{{this.oldPartNumber}}" />
			<input type="hidden" name="product" value="{{vehicleString ../cart.vehicle}} {{this.short_description}} #{{this.oldPartNumber}}" />
			<input type="hidden" name="notax" value="null" />
			<input type="hidden" name="price" value="{{getPrice this}}" />
			<input type="hidden" name="weight" value="null" />
			<input type="submit" name="submit" class="fasttrackracks_button" value="Buy Now" />
		</form>
	{{/registerPartial}}
	{{#registerPartial "stowaway2"}}
		<form action="http://www.stowaway2.com/store/addtocart.aspx" method="post">
			<div style="padding-top:15px"><span class="price accPrice">{{getPrice this}}</span>
				<label>Qty</label>
				<select name="qty" style="min-width:40px;display:inline">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
			</div>
			<input type="hidden" name="return" value="{{../cart.location}}" />
			<input type="hidden" name="imageurl" value="{{getImage this.images}}" />
			<input type="hidden" name="ItemNbr" value="{{this.short_description}} #{{this.oldPartNumber}}" />
			<input type="hidden" name="product" value="{{vehicleString ../cart.vehicle}} {{this.short_description}} #{{this.oldPartNumber}}" />
			<input type="hidden" name="notax" value="null" />
			<input type="hidden" name="price" value="{{getPrice this}}" />
			<input type="hidden" name="weight" value="null" />
			<input type="submit" name="submit" class="fasttrackracks_button" value="Buy Now" />
		</form>
	{{/registerPartial}}


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
                    <div class="col-md-7">
                        <h3>{{this.short_description}} #{{this.oldPartNumber}}</h3>
                    </div>
                    <div class="col-md-5 checkout">
						{{#partial ../cart.type this}}{{/partial}}
                    </div>
                </div>
                <div>
                    <div class="col-md-4 images">
                        <img src="{{getImage this.images}}" id="img-main-{{this.oldPartNumber}}" alt="{{this.short_description}}" class="main img-thumbnail">
												<div id="img_thumbs">
													{{{getThumbs this.images}}}
												</div>
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
						var src = img.path.Scheme + '://' + img.path.Host + img.path.Path;
            if(img.sort === 'a' && img.height > 75){
							IMG_SEL = img.path.Path;
              return src;
            }
        }
    });

		Handlebars.registerHelper('getThumbs', function(images){
			return getThumbnails(images);
		});

	Handlebars.registerHelper('vehicleString', function(v){
		return v.year + ' ' + v.make + ' ' + v.model + ' ' + v.style;
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
                return '$' + parseFloat(pr.price, 2).toFixed(2);
            }
        }
    });
    Handlebars.registerHelper('if_eq', function(a, b, block) {
        if(a === b) {
            return block.fn(this)
        }
        return block.inverse(this);
    });
	Handlebars.registerHelper('generateCartLink', function(a, b){
		return a.replace('[part_id]', b);
	});
	Handlebars.registerHelper('registerPartial', function(name, options) {
		Handlebars.dynamicPartials = Handlebars.dynamicPartials || {};
		Handlebars.dynamicPartials[name] = function (context, _options) {
			return options.fn(context, _options);
		};
	});
	Handlebars.registerHelper('partial', function (name, context, options) {
		context = context || {};
		var partial = Handlebars.dynamicPartials[name];
		partial = partial || Handlebars.partials[name];
		if (!partial) {
			return "";
		}
		return partial.call(null, context, options);
	});

	var widget = document.getElementById('aries-widget');
	SHOPPING_CART = widget.getAttribute('data-cart');
	CUSTOMER_EMAIL = widget.getAttribute('data-email');
	CART_LINK = widget.getAttribute('data-cart-link') || '';
	var tmpKey = widget.getAttribute('data-key');
	if (tmpKey !== undefined && tmpKey !== null && tmpKey !== ''){
		API_KEY = tmpKey;
	}

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
			if (SHOPPING_CART === 'nuera'){
				var returnURL = window.location.pathname;
				if (returnURL.indexOf('?') !== -1) {
					returnURL += '&partID=[part_id]';
				}else{
					returnURL += '?partID=[part_id]';
				}

				if (CART_LINK === '') {
					CART_LINK = '/addtocart.aspx?returnurl=' + returnURL;
				} else {
					if (CART_LINK.indexOf('?') !== -1) {
						CART_LINK += '&returnurl=' + returnURL;
					} else {
						CART_LINK += '?returnurl=' + returnURL;
					}
				}
			}
			data.cart = {
				type: SHOPPING_CART,
				location: window.location.href,
				email: CUSTOMER_EMAIL,
				link: CART_LINK,
				vehicle: VEHICLE
			};
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

function getThumbnails(images) {
	if(images === undefined) {
			return '';
	}

	var result = "";
	var src = "";
	var str = "";

	for (var i = 0; i < images.length; i++) {
		var img = images[i];
		if(img.size === "Tall" && img.path.Path !== IMG_SEL){
			src = img.path.Scheme + '://' + img.path.Host + img.path.Path;
			str = "<img src='" + src + "' alt='" + this.short_description + "' class='mini img-thumbnail'>";
			result = result.concat(str);
		}
	}

	return result;
}

function getSelected(images, imgPath) {
	var tmp = "img_main"
}

initialize();
