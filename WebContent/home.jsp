<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<html>
<head>
<title>home</title>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="GENERATOR" content="Rational Application Developer">
<script type="text/javascript" src="js/nricValidation.js"></script>
<!--<script type="text/javascript" src="js/nric-validation.js"></script>
-->
</head>
<body>
<form  name="form1" onsubmit="return isValidNric()" method="get" action="CheckServlet">
<center>
<table bgcolor="silver">
<tr><td><u>occupier1</u></td></tr>
<tr><td>
<label>Identity NO:</label></td><td> <input type="text" name="nric" id="nric"></td><td><select name="idType">
<option value="UIN">UIN</option>
<option value="FIN">FIN</option>
<option value="PPN">PPN</option>
<option value="XIN">XIN</option>
</select>*</td>
<td><input type="submit" value="Retrive Personal Data"></td>
</tr>
<tr><td><label>Name</label></td><td><input type="text" name="name" id="name">*</td></tr>
<tr><td>
<label>Relationship:</label></td><td>
<select name="relationShip">
<option value="Husband/Wife">Husband/Wife</option>
<option value="Son/Daughter">Son/Daughter</option>
<option value="Brother/Sister">Brother/Sister</option>
<option value="Father/Mother">Father/Mother</option>
</select>*</td>
<td><label>Gender</label></td><td><input type="radio" name="gender" value="Male">Male<input type="radio" name="gender" value="Female">Female*</td>
</tr>
<tr><td><label>Date of Birth</label></td><td><input type="text" name="dob" id="dob" placeholder="DD/MM/YYYY">*</td>
<td><select name="citizenShip">
<option value="Singapore Citizen">Singapore Citizen</option>
<option value="Singapore Permanent Resident">Singapore Permanent Resident</option>
<option value="Non-Citizen">Non-Citizen</option>
</select>*
</td></tr>
<tr><td colspan="4" align="left">Applicable for occupier who is Non-citizen with >=6 months visit pass</td></tr>
<tr><td><label>Card Type</label></td><td><select name="cardType">
<option value="Social Visit Pass">Social Visit Pass</option>
<option value="Work Permit">Work Permit</option>
<option value="Employement Pass">Employement Pass</option>
<option value="Dependent Pass">Dependent Pass</option>
<option value="Student Pass">Student Pass</option>
</select></td></tr>
<tr><td><label>Date of Issue</label></td><td><input type="text" name="dateOfIssue" id="dateOfIssue" placeholder="DD/MM/YYYY"></td>
<td><label>Expiry Date</label></td><td><input type="text" name="dateOfExpiry" id="dateOfExpiry" placeholder="DD/MM/YYYY"></td></tr>
</table>
</center>
</form>
</body>
</html>
