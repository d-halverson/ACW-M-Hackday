"use strict";
/*
    Drew Halverson

    Description of what the program does
*/

window.onload = function()
{
  setInnerHTML("dropdown", createHTMLForDropdown(createBuildingBathroomArray("Bruininks Hall", 5)));
};

function displayInfo()
{
  var yourSelect = document.getElementById( "dropdown" );
  setInnerHTML("infoHeader", "Data for "+yourSelect.options[ yourSelect.selectedIndex ].text+":");
}

function createBuildingBathroomArray(building, floors)
{
  var i;
  var array;
  array = new Array(floors);

  for(i=0; i<floors; i++)
  {
    array[i] = createBathroomString(building, i+1);
  }
  return array;
}

function createBathroomString(building, floor)
{
  if(building===null)
  {
    building = "";
  }
  if(floor===null)
  {
    floor = 1;
  }
  return (building + ", " + "Floor: "+floor);
}

function createHTMLForDropdown(array)
{
  var i; //counter
	var result;//string to be returned
	var singleOption; //a temporary string holder

	result = "<option value=\"bathroom-1\" selected disabled hidden>Select a bathroom here...</option>";

	for(i=0; i<array.length; i++)
	{
		singleOption = createHTMLElement("option", "bathroom"+i, null, array[i]);
		singleOption = singleOption.substring(0, singleOption.indexOf("id=")) + "value=" + singleOption.substring(singleOption.indexOf("id=") + 3);
		result = result + singleOption;
	}
	return result;
}

function setInnerHTML(id, data)
{
	getElementReference(id).innerHTML = data;
}

function createHTMLElement(elementType, id, classInfo, content)
{
	//returns a string containing the html for an element with the given parameters
	if(elementType===null)
	{
		elementType = "";
	}
	if(classInfo===null)
	{
		classInfo = "";
	}
	if(id===null)
	{
		id = "";
	}

	elementType = trim(elementType);
	id = trim(id);
	classInfo = trim(classInfo);

	if(id.length>0)
	{
		id = " id=\""+id+"\"" ;
	}
	if(classInfo.length>0)
	{
		classInfo = " class=\""+classInfo+"\"";
	}

	return "<"+elementType+id+classInfo+">"+content+"</"+elementType+">";
}

function trim(data)
{
	//removes whitespace before and after the non whitespace characters in a string
	var data2; //a string version of data in case data is not a string
    	var result; //holds the final string
    	var whitespace; //holds the possible whitespace characters to look for
    	var start; //holds the position of the first non whitespace character
    	var end; //holds the position of the last non whitespace character + 1
    	start = 0;
    	whitespace = " \n\r\t\f";
   	data2 = "";
    	data2 = data2 + data;
    	if(data2 === data)
    	{
         	while(start < data.length && whitespace.indexOf(data.charAt(start)) >=0)
         	{
             	start = start + 1;
         	}
         	end = data.length - 1;
         	while(end >= 0 && whitespace.indexOf(data.charAt(end)) >=0)
         	{
             		end = end - 1;
         	}
         	if(end < start)
         	{
             	result = "";
         	}
         	else
         	{
             		result = data.substring(start, end+1);
         	}
     	}
     	else
     	{
		result = data;
     	}
	return result;
}

function setInnerHTML(id, data)
{
	getElementReference(id).innerHTML = data;
}

function getElementReference(id)
{
	return document.getElementById(id);
}

function getInnerHTML(id)
{
	return getElementReference(id).innerHTML;
}