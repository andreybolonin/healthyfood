// Copyright 2006-2016 ClickTale Ltd., US Patent Pending
// Generated on: 3/28/2016 1:03:51 PM (UTC 3/28/2016 6:03:51 PM)

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};
ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (function () {
    var recordingThreshold = Math.random() * 100;

    return {
        isRecordingApproved: function(percentage) {
            return recordingThreshold <= percentage;
        }
    }
})();

			
// Copyright 2006-2016 ClickTale Ltd., US Patent Pending
// PID: 13456
// WR destination: www07
// WR version: 15.4
// Recording ratio: 0.28
// Generated on: 3/28/2016 1:03:51 PM (UTC 3/28/2016 6:03:51 PM)
(function (){
	var dependencyCallback;
        var scriptSyncTokens = ["wr"];
        var dependencies = scriptSyncTokens.slice(0);
    function isValidToken(token) {
        if (scriptSyncTokens.indexOf(token) > -1){
			var index = dependencies.indexOf(token);

			if (index > -1) {
				dependencies.splice(index, 1);
				return true;
			}
        }

        return false;
    }
    window.ClickTaleGlobal = window.ClickTaleGlobal || {};
    ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};
    ClickTaleGlobal.scripts.dependencies = {
        setDependencies: function (deps) {
            scriptSyncTokens = deps;
        },
        onDependencyResolved: function (callback) {
            dependencyCallback = callback;
        },
        notifyScriptLoaded: function (token) {
            if (isValidToken(token)) {
                if (dependencies.length === 0 && typeof dependencyCallback === "function") {
                    dependencyCallback();
                }
            }
        }
    };
})();	



if (typeof(ClickTaleHooks) == 'undefined') {
    ClickTaleHooks = {
        Hooks : ['PreLoad', 'AfterPreLoad', 'PreRecording', 'AfterPreRecording', 'AdditionalCustomCode', 'AfterAdditionalCustomCode'],
        RunHook : function (hookName) {
			if (typeof window["ClickTale" + hookName + "Hook"] === "function") window["ClickTale" + hookName + "Hook"]();
            var s = 'ClickTaleSettings'; if (!ClickTaleHooks.IsValidHookName(hookName) || !(s in window) || !('PDCHooks' in window[s]) || !(hookName in window[s].PDCHooks)) return;
            var c = window[s].PDCHooks[hookName]; if (c instanceof Array) for (var i=0;i<c.length;i++) if (typeof(c[i]) == "function") c[i](); 
            if (typeof(c) == "function") c();
        },
		IsValidHookName : function (hookName) {
			if(Array.prototype.indexOf) { return ClickTaleHooks.Hooks.indexOf(hookName) >= 0; }
			for(var i = 0; i < ClickTaleHooks.Hooks.length; i++) { if(ClickTaleHooks.Hooks[i] === hookName) { return true; } } return false;
		}
    }
}    
	

function ClickTaleCDNHTTPSRewrite(u)
{
	try
	{
		var scripts = document.getElementsByTagName('script');
		if(scripts.length)
		{
			var script = scripts[ scripts.length - 1 ], s='https://clicktalecdn.sslcs.cdngc.net/';
			if(script.src && script.src.substr(0,s.length)==s )
				return u.replace('https://cdnssl.clicktale.net/',s);
		}
	}
	catch(e)
	{
	}
	return u;
} 

var ClickTaleIsXHTMLCompliant = false;


var ClickTalePrevOnReady;
if(typeof ClickTaleOnReady == 'function')
{
	ClickTalePrevOnReady=ClickTaleOnReady;
	ClickTaleOnReady=undefined;
}

if (typeof window.ClickTaleScriptSource == 'undefined')
{
	window.ClickTaleScriptSource=(document.location.protocol=='https:'
		?ClickTaleCDNHTTPSRewrite('https://cdnssl.clicktale.net/www/')
		:'http://cdn.clicktale.net/www/');
}

ClickTaleHooks.RunHook('PreLoad');
// Start of user-defined pre WR code (PreLoad)b
//PTC Code Version 7

window.ClickTaleSettings = window.ClickTaleSettings || {};
window.ClickTaleSettings.PTC = window.ClickTaleSettings.PTC || {};
window.ClickTaleIncludedOnDOMReady = true;
window.ClickTaleSettings.PTC.EnableChangeMonitor = false;
window.ClickTaleSettings.PTC.UseTransport = true;

window.ClickTaleSettings.CheckAgentSupport = function (f, v) {
	if (v.t == v.IE && v.v <= 8) {
		window.ClickTaleSettings.PTC.okToRunPCC = false;
		return false;
	} else {
		if (!(v.m || v.t == v.IE && v.v <= 10)) {
			window.ClickTaleSettings.PTC.EnableChangeMonitor = true;
			window.ClickTaleSettings.PTC.ConfigChangeMonitor();
		}
		var fv = f(v);
		window.ClickTaleSettings.PTC.okToRunPCC = fv;
		return fv;
	}
};

window.ClickTaleSettings.PTC.RulesObj = [{
	selector: "input[type=\"text\"], input[type=\"tel\"], input[type=\"email\"]",
	changeMon: {
		Attributes: ['value'],
		Text: false
	},
	rewriteApi: {
		Attributes: ['value'],
		Text: false
	}
}];

window.ClickTaleSettings.PTC.RulesObjRemoveEls = [
];

;
(function () {
	if (typeof window.ClickTalePIISelector === 'string' && window.ClickTalePIISelector != '') {
		try {
			var domNodes = document.querySelectorAll(window.ClickTalePIISelector);
			if (domNodes) {
				window.ClickTaleSettings.PTC.RulesObj.push({
					selector: window.ClickTalePIISelector,
					changeMon: {
						Attributes: ['value'],
						Text: true
					},
					rewriteApi: {
						Attributes: ['value'],
						Text: true
					}
				});
			}
		} catch (err) {}
	}
})();

window.ClickTaleSettings.PTC.cloneNodeIE9 = function (node) {
	var clone = node.nodeType === 3 ? document.createTextNode(node.nodeValue) : node.cloneNode(false);

	var child = node.firstChild;
	while (child) {
		if (child.nodeName !== 'SCRIPT') {
			clone.appendChild(window.ClickTaleSettings.PTC.cloneNodeIE9(child));
		} else {
			var script = document.createElement('script');
			clone.appendChild(script);
		}
		child = child.nextSibling;
	}

	return clone;
};

window.ClickTaleSettings.PTC.ConfigChangeMonitor = function () {

	if (window.ClickTaleSettings.PTC.EnableChangeMonitor) {
		window.ClickTaleSettings.XHRWrapper = {
			Enable: false
		};

		var script = document.createElement("SCRIPT");
		script.src = (document.location.protocol === "https:" ? "https://cdnssl." : "http://cdn.") + "clicktale.net/www/ChangeMonitor-latest.js";
		document.body.appendChild(script);

		window.ClickTaleSettings.ChangeMonitor = {
			Enable: true,
			AddressingMode: "id",
			OnReadyHandler: function (changeMonitor) {
				changeMonitor.observe();

				var CMRemrule = window.ClickTaleSettings.PTC.RulesObjRemoveEls;
				if (CMRemrule) {
					for (var i = 0; i < CMRemrule.length; i++) {
						var rule = CMRemrule[i];
						var CMlocation = rule['location'];
						if ((!CMlocation || (CMlocation && document.location[CMlocation['prop']].toLowerCase().search(CMlocation.search) === -1))) {
							if (rule.changeMon) {
								changeMonitor.exclude(rule.changeMon);
							}
							if (rule.changeMonLive) {
								changeMonitor.exclude({
									selector: rule.changeMonLive,
									multiple: true
								});
							}
						}
					}
				}
			},
			OnBeforeReadyHandler: function (settings) {
				settings.Enable = window.ClickTaleGetUID ? !!ClickTaleGetUID() : false;
				return settings;
			},
			Filters: {
				MaxBufferSize: 3000000,
				MaxElementCount: 30000
			},
			PII: {
				Text: [],
				Attributes: []
			}
		}
		var RulesObj = window.ClickTaleSettings.PTC.RulesObj;
		if (RulesObj) {
			window.ClickTaleSettings.ChangeMonitor.PII.Text = window.ClickTaleSettings.ChangeMonitor.PII.Text || [];
			window.ClickTaleSettings.ChangeMonitor.PII.Attributes = window.ClickTaleSettings.ChangeMonitor.PII.Attributes || [];
			for (var i = 0; i < RulesObj.length; i++) {
				var CMrule = RulesObj[i]['changeMon'];
				var CMlocation = RulesObj[i]['location'];
				if (!CMrule || (CMlocation && document.location[CMlocation['prop']].toLowerCase().search(CMlocation.search) === -1)) {
					continue;
				}
				var selector = RulesObj[i]['selector'];
				var attributesArr = CMrule.Attributes;
				if (attributesArr instanceof Array) {
					for (var u = 0; u < attributesArr.length; u++) {
						var attr = attributesArr[u];
						window.ClickTaleSettings.ChangeMonitor.PII.Attributes.push({
							selector: selector,
							transform: (function (attr) {
								return function (el) {
									var attrs = el.attributes;
									var attrsToReturn = {}
									for (var i = 0; i < attrs.length; i++) {
										var name = attrs[i].nodeName;
										attrsToReturn[name] = attrs[i].nodeValue;
									}
									var attrib = el.getAttribute(attr);;
									if (typeof attrib === 'string') {
										attrsToReturn[attr] = attrib.replace(/\w/g, '-');
									}
									return attrsToReturn;
								}
							})(attr)
						});
					}
				}
				if (CMrule.Text) {
					window.ClickTaleSettings.ChangeMonitor.PII.Text.push({
						selector: selector,
						transform: function (el) {
							return el.textContent.replace(/\w/g, '-');
						}
					});
				}
			}
		}
	}
};

window.ClickTaleSettings.Compression = {
	Method: function () {
		return "deflate";
	}
};

window.ClickTaleSettings.Transport = {
	Legacy: false,
	MaxConcurrentRequests: 5
};

window.ClickTaleSettings.RewriteRules = {
	OnBeforeRewrite: function (rewriteApi) {
		var bodyClone = ((document.documentMode && document.documentMode <= 9) ? ClickTaleSettings.PTC.cloneNodeIE9(document.body) : document.body.cloneNode(true));

		if (window.ClickTaleSettings.PTC.RulesObj) {
			rewriteApi.add(function (buffer) {


				var RulesObj = window.ClickTaleSettings.PTC.RulesObj;
				for (var i = 0; i < RulesObj.length; i++) {
					var rewriteApirule = RulesObj[i]['rewriteApi'];
					var rewriteApilocation = RulesObj[i]['location'];
					if (!rewriteApirule || (rewriteApilocation && document.location[rewriteApilocation['prop']].toLowerCase().search(rewriteApilocation.search) === -1)) {
						continue;
					}
					var selector = RulesObj[i]['selector'];
					var elements = bodyClone.querySelectorAll(selector);

					Array.prototype.forEach.call(elements, function (el, ind) {
						var attributesArr = rewriteApirule.Attributes;
						if (attributesArr instanceof Array) {

							for (var u = 0; u < attributesArr.length; u++) {
								var attr = attributesArr[u];
								var attrib = el.getAttribute(attr);
								if (typeof attrib === 'string') {
									el.setAttribute(attr, attrib.replace(/\w/g, '-'));
								}
							}

						}
						if (rewriteApirule.Text) {
							var children = el.childNodes;
							Array.prototype.forEach.call(children, function (child) {
								if (child && child.nodeType === 3) {
									child.textContent = child.textContent.replace(/\w/g, '-');
								}
							});
						}
					});
				}

				//work on body
				var RulesObjRemoveEls = window.ClickTaleSettings.PTC.RulesObjRemoveEls;
				if (RulesObjRemoveEls) {
					for (var i = 0; i < RulesObjRemoveEls.length; i++) {
						if (RulesObjRemoveEls[i].rewriteApi) {
							var elementsToRemove = bodyClone.querySelectorAll(RulesObjRemoveEls[i].rewriteApi);
							Array.prototype.forEach.call(elementsToRemove, function (el, ind) {
								if (el.parentNode) {
									el.parentNode.removeChild(el);
								}
							});
						}
						if (RulesObjRemoveEls[i].rewriteApiReplace) {
							var elementsToReplace = bodyClone.querySelectorAll(RulesObjRemoveEls[i].rewriteApiReplace);
							Array.prototype.forEach.call(elementsToReplace, function (el, ind) {
								if (el.parentNode) {
									var comment = document.createComment(el.outerHTML);
									el.parentNode.replaceChild(comment, el);
								}
							});
						}
					}
				}

				buffer = buffer.replace(/(<body[^>]*>)[\s\S]*?<\/body>/gi, function (m, g1) {
					if (g1) {
						return g1 + bodyClone.innerHTML.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, '<script><\/script>').replace(/(<div id="?ClickTaleDiv"?[^>]+>)\s*<script[^>]+><\/script>\s*(<\/div>)/i, '$1$2') + '<\/body>';
					}
					return m;
				});

				return buffer;
			});
		}
		rewriteApi.add({
			pattern: /(<head[^>]*>)/i,
			replace: '$1<script type="text\/javascript" class="cm-ignore" src="http:\/\/dummytest.clicktale-samples.com\/GlobalResources\/jquery.js"><\/script>'
		});
	}
};

// End of user-defined pre WR code
ClickTaleHooks.RunHook('AfterPreLoad');

var ClickTaleOnReady = function()
{
	var PID=13456, 
		Ratio=0.28, 
		PartitionPrefix="www07";
	
	if (window.navigator && window.navigator.loadPurpose === "preview") {
       return; //in preview
	};
		
	ClickTaleHooks.RunHook('PreRecording');
	// Start of user-defined header code (PreInitialize)
	if (typeof ClickTaleSetAllSensitive === "function") {
	ClickTaleSetAllSensitive();
};

if (typeof ClickTaleUploadPage === 'function' && window.ClickTaleSettings.PTC.UseTransport) {
	if (window.ClickTaleSettings.PTC.EnableChangeMonitor) {
		if (typeof ClickTaleEvent === "function") {
			ClickTaleEvent("CM");
		}
	}
	ClickTaleUploadPage();
};

	// End of user-defined header code (PreInitialize)
    ClickTaleHooks.RunHook('AfterPreRecording');
	
	
	
	ClickTale(PID, Ratio, PartitionPrefix);
	
	if((typeof ClickTalePrevOnReady == 'function') && (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))
	{
    	ClickTalePrevOnReady();
	}
	
	ClickTaleHooks.RunHook('AdditionalCustomCode');
	// Start of user-defined footer code
	
	// End of user-defined footer code
	ClickTaleHooks.RunHook('AfterAdditionalCustomCode');
};

 
document.write(unescape("%3Cdiv%20id%3D%22ClickTaleDiv%22%20style%3D%22display%3A%20none%3B%22%3E%3C/div%3E"));



document.write(unescape("%3Cscript%20src='"+window.ClickTaleScriptSource+"tc/WRf4.js"+"'%20type='text/javascript'%3E%3C/script%3E"));



!function(){function t(){window.addEventListener&&addEventListener("message",e,!1)}function e(t){var e,n=new RegExp("(clicktale.com|ct.test)($|:)"),i=new RegExp("ct.test"),c=!1,l=t.origin;try{e=JSON.parse(t.data)}catch(d){return}n.test(t.origin)!==!1&&(i.test(t.origin)===!0&&(c=!0),"CTload_ve"===e["function"]&&"function"==typeof ClickTaleGetPID&&null!==ClickTaleGetPID()&&o(l,c))}function n(t){return document.createElementNS?document.createElementNS("http://www.w3.org/1999/xhtml",t):document.createElement(t)}function o(t,e){var o=n("script");o.setAttribute("type","text/javascript"),o.setAttribute("id","ctVisualEditorClientModule");var i;i=e?document.location.protocol+"//ct.test/VisualEditor/Client/dist/veClientModule.js":document.location.protocol+"//"+t.match(/subs\d*/)[0]+".app.clicktale.com/VisualEditor/Client/dist/veClientModule.js",o.src=i,document.getElementById("ctVisualEditorClientModule")||document.body.appendChild(o)}try{var i=window.chrome,c=window.navigator&&window.navigator.vendor;null!==i&&void 0!==i&&"Google Inc."===c&&window.self!==window.top&&t()}catch(l){}}();
