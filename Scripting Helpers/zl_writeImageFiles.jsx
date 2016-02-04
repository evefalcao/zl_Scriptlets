/**********************************************************************************************
    zl_writeImageFiles
    Copyright (c) 2015 Zack Lovatt. All rights reserved.
    zack@zacklovatt.com

    Name: Write Image Files
    Version: 0.1

    Description:
        Usage to write & fetch image files from binary string.

        This script is provided "as is," without warranty of any kind, expressed
        or implied. In no event shall the author be held liable for any damages
        arising in any way from the use of this script.
**********************************************************************************************/

/******************************
    getUserDataFolder()

    Description:
    From P9, checks/creates aes folder & writes file there

    Parameters:

    Returns:
    myFile - the folder string
 ******************************/
function getUserDataFolder () {
    var userDataFolder = Folder.userData;
    var aescriptsFolder = Folder(userDataFolder.toString() + "/Aescripts/" + el_prism_scriptName + "/settings");
    if (!aescriptsFolder.exists) {
        var checkFolder = aescriptsFolder.create();
            if (!checkFolder) {
                alert ("Error creating ");
                aescriptsFolder  = Folder.temp;
            }
    }
    return aescriptsFolder.toString();
} // end getUserDataFolder


/******************************
    createResourceFile()

    Description:
    From P9, creates the image file

    Parameters:
    filename - name of file
    binaryString - the image to build
    resourceFolder - where to save it

    Returns:
    myFile - the image
 ******************************/
function createResourceFile (filename, binaryString, resourceFolder) {
    var myFile = new File(resourceFolder+"/"+filename);

    if (binaryString.length !== myFile.length || !File(myFile).exists) {
        if (!(isSecurityPrefSet())) {
            alert ("This script requires access to write files. Go to the General panel of the application preferences and make sure Allow Scripts to Write Files and Access Network is checked.");

            try{
                app.executeCommand(2359);
            } catch (e) {
                alert(e);
            }

            if (!isSecurityPrefSet()) return null;
        }

        myFile.encoding = "BINARY";
        myFile.open( "w" );
        myFile.write( binaryString );
        myFile.close();
    }

    return myFile;
} // end createResourceFile


/******************************
    isSecurityPrefSet()

    Description:
    From P9, check whether can write to prefs

    Parameters:
    Returns:
 ******************************/
function isSecurityPrefSet(){
    try{
        var securitySetting = app.preferences.getPrefAsLong("Main Pref Section",
                        "Pref_SCRIPTING_FILE_NETWORK_SECURITY");
        return (securitySetting == 1);
    }catch(e){
        return (securitySetting = 1);
    }
}

/******************************
    el_prism_createPalette()

    Description:
    Creates ScriptUI Palette Panel

    Parameters:
    thisObj - this object

    Returns:
    Nothing
 ******************************/
function el_prism_createPalette (thisObj) {
    var win = (thisObj instanceof Panel) ? thisObj : new Window('palette', el_prism_scriptName, undefined, {resizeable: true});

    { // Buttons
        win.buttonGroup = win.add('group');
        win.buttonGroup.orientation = "row";

        { // dumbColour button
            try {
                prism_button_cycleColours = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00 \x00\x00\x00 \b\x02\x00\x00\x00\u00FC\x18\u00ED\u00A3\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x03\"iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.3-c011 66.145661, 2012/02/06-14:56:27        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmp:CreatorTool=\"Adobe Photoshop CS6 (Windows)\" xmpMM:InstanceID=\"xmp.iid:1213DC213A0C11E5AD85CE8D7AD86F02\" xmpMM:DocumentID=\"xmp.did:1213DC223A0C11E5AD85CE8D7AD86F02\"> <xmpMM:DerivedFrom stRef:instanceID=\"xmp.iid:1213DC1F3A0C11E5AD85CE8D7AD86F02\" stRef:documentID=\"xmp.did:1213DC203A0C11E5AD85CE8D7AD86F02\"/> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00ACs\u00EE\u00EE\x00\x00\x01NIDATx\u00DA\u00D4\u00961K\x031\x18\u0086\u00BF\\\u0092^\x1B\u00D0ss\x11n<\u00A9\x05\u00C7.]\x04\x07\u00C1\u00C1\u00D5\u00DF\u00E1\u00E2\x0FpP\u00C1\u00CDA\u009Ct\u00AE\u0093\u0093\x7FA\x1DD\u00B0\b\x1D\x05\u00A1\n\u00A2\x1C\u00EA\u009D\u00BD$\x173V\u00B8L\x1F!\u0098-\u00CB\u00FB\u0084\u00F7\u00E1KB\u00BAY\u0096$\t\u00F8Yy\u009E3\u009B\x1E\x0B\u00E1\t`\x0F\x1E\u0081\u00E7\u00E5\x1D\u00C0f7\u00BB\u00A3\u00CF\u00B66\u00C8\u00C4\x1FJ\x0E{s\u00CD\u0080\u00E5\\\u00B5\u00A5\u00C6\x028\rW\u00D1q\x7F\u0091\x01A&*\u00B0%W\u00CD\u0080\u00ED\u00A5\u00FB\x0E\u00C1VT\x1Az\u00F7\u00D2m\x06\u00AC\u00F0\x0F\x01\x12\t(\u0080\u0087s\u00B0\u00F7\u00DDgX\x05\u00A0\u008C\x1B0X\x171\u00C7\x02\u00A6\x12\u00AE\u0087\x0E\u00C9k\u00AB b\u00EC\u00A0\x15Sr4\f\u00E5\u00E0\u00F4*nq\u00AC\u0084J\u00BA\u00E7\u00E0\u00A6\x1AEu\u008D\x04\u00D4\u00CA\u00B6\u00926\x03\u00E6\u00B3g\u00C2\u00B0s`\x14\x7F\u00BDM\x039(\x1E{\x113\u00E8\u008A\u0088\x13\u00F04\x19\u0098\u0088\"\x01\u00A4\u00D6\f\x1E\u009A\x01_[\x07\u009Ac\u00DFg*\u008B\u0085\u0093\u00CD@\x0E\u00C4\u00DB\u00D8\u00F0\x0E\u00B6\"Y:\x01\u00E9\u00C59\x01\u00AC\x03\x03z\u00E2\x02l\u00C0>\u00AF\u00B1\x0EdT\u009CA(\x07\u00EF\u00AD17X\x07\u0092\u00943W\u00D1_\u00C0e\u00B5\u00F3\u00FF~v\u00FE\x1D\u00D8\x1Fv\u00E2-\u00DD\u0086\u00FF\n0\x00t\x15g\u00A5\u00A8'<\u00BA\x00\x00\x00\x00IEND\u00AEB`\u0082";
                prism_button_cycleColours_rollover = "\u00FF\u00D8\u00FF\u00E1\x04\u00C9Exif\x00\x00MM\x00*\x00\x00\x00\b\x00\x07\x01\x12\x00\x03\x00\x00\x00\x01\x00\x01\x00\x00\x01\x1A\x00\x05\x00\x00\x00\x01\x00\x00\x00b\x01\x1B\x00\x05\x00\x00\x00\x01\x00\x00\x00j\x01(\x00\x03\x00\x00\x00\x01\x00\x02\x00\x00\x011\x00\x02\x00\x00\x00\"\x00\x00\x00r\x012\x00\x02\x00\x00\x00\x14\x00\x00\x00\u0094\u0087i\x00\x04\x00\x00\x00\x01\x00\x00\x00\u00A8\x00\x00\x00\u00D4\x00\n\u00FC\u0080\x00\x00'\x10\x00\n\u00FC\u0080\x00\x00'\x10Adobe Photoshop CC 2014 (Windows)\x002015:08:12 13:43:30\x00\x00\x03\u00A0\x01\x00\x03\x00\x00\x00\x01\u00FF\u00FF\x00\x00\u00A0\x02\x00\x04\x00\x00\x00\x01\x00\x00\x00 \u00A0\x03\x00\x04\x00\x00\x00\x01\x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x06\x01\x03\x00\x03\x00\x00\x00\x01\x00\x06\x00\x00\x01\x1A\x00\x05\x00\x00\x00\x01\x00\x00\x01\"\x01\x1B\x00\x05\x00\x00\x00\x01\x00\x00\x01*\x01(\x00\x03\x00\x00\x00\x01\x00\x02\x00\x00\x02\x01\x00\x04\x00\x00\x00\x01\x00\x00\x012\x02\x02\x00\x04\x00\x00\x00\x01\x00\x00\x03\u008F\x00\x00\x00\x00\x00\x00\x00H\x00\x00\x00\x01\x00\x00\x00H\x00\x00\x00\x01\u00FF\u00D8\u00FF\u00ED\x00\fAdobe_CM\x00\x01\u00FF\u00EE\x00\x0EAdobe\x00d\u0080\x00\x00\x00\x01\u00FF\u00DB\x00\u0084\x00\f\b\b\b\t\b\f\t\t\f\x11\x0B\n\x0B\x11\x15\x0F\f\f\x0F\x15\x18\x13\x13\x15\x13\x13\x18\x11\f\f\f\f\f\f\x11\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\x01\r\x0B\x0B\r\x0E\r\x10\x0E\x0E\x10\x14\x0E\x0E\x0E\x14\x14\x0E\x0E\x0E\x0E\x14\x11\f\f\f\f\f\x11\x11\f\f\f\f\f\f\x11\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\u00FF\u00C0\x00\x11\b\x00 \x00 \x03\x01\"\x00\x02\x11\x01\x03\x11\x01\u00FF\u00DD\x00\x04\x00\x02\u00FF\u00C4\x01?\x00\x00\x01\x05\x01\x01\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x00\x03\x00\x01\x02\x04\x05\x06\x07\b\t\n\x0B\x01\x00\x01\x05\x01\x01\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x00\x01\x00\x02\x03\x04\x05\x06\x07\b\t\n\x0B\x10\x00\x01\x04\x01\x03\x02\x04\x02\x05\x07\x06\b\x05\x03\f3\x01\x00\x02\x11\x03\x04!\x121\x05AQa\x13\"q\u00812\x06\x14\u0091\u00A1\u00B1B#$\x15R\u00C1b34r\u0082\u00D1C\x07%\u0092S\u00F0\u00E1\u00F1cs5\x16\u00A2\u00B2\u0083&D\u0093TdE\u00C2\u00A3t6\x17\u00D2U\u00E2e\u00F2\u00B3\u0084\u00C3\u00D3u\u00E3\u00F3F'\u0094\u00A4\u0085\u00B4\u0095\u00C4\u00D4\u00E4\u00F4\u00A5\u00B5\u00C5\u00D5\u00E5\u00F5Vfv\u0086\u0096\u00A6\u00B6\u00C6\u00D6\u00E6\u00F67GWgw\u0087\u0097\u00A7\u00B7\u00C7\u00D7\u00E7\u00F7\x11\x00\x02\x02\x01\x02\x04\x04\x03\x04\x05\x06\x07\x07\x06\x055\x01\x00\x02\x11\x03!1\x12\x04AQaq\"\x13\x052\u0081\u0091\x14\u00A1\u00B1B#\u00C1R\u00D1\u00F03$b\u00E1r\u0082\u0092CS\x15cs4\u00F1%\x06\x16\u00A2\u00B2\u0083\x07&5\u00C2\u00D2D\u0093T\u00A3\x17dEU6te\u00E2\u00F2\u00B3\u0084\u00C3\u00D3u\u00E3\u00F3F\u0094\u00A4\u0085\u00B4\u0095\u00C4\u00D4\u00E4\u00F4\u00A5\u00B5\u00C5\u00D5\u00E5\u00F5Vfv\u0086\u0096\u00A6\u00B6\u00C6\u00D6\u00E6\u00F6'7GWgw\u0087\u0097\u00A7\u00B7\u00C7\u00FF\u00DA\x00\f\x03\x01\x00\x02\x11\x03\x11\x00?\x00\u00E0\u00A9\u00A5\u00F7\u00D9h\u00F5\u00BD0\u00C3\u00A0'\u00C4\u009F1\u00E0\u008D\u00F6\x07\x7F\u00DC\u00B1\u00F7\u00FF\x00\u00E6K_\u00EA\u0086)\u00C8\u00BB>21\u00F1\u00F6\u0096\x7FH\u00EF&\u00DF\u00A1\u00EEg\u00F6\u0097K\u00FB-\u00DF\u00F9a\u0081\u00FE\u00BF\u00F5\u00D5G?;,y%\x01\x1B\u00AA\u00EB\u00DC\x7FrN\u00AF+\x0EH\u00E1\u0089\u00CB\x0E,\u009A\u00F1\x1B\u00C9\u00FB\u00DA|\u0093\u008B\u00C1\u00FD\u0081\u00DF\u00F7,}\u00FF\x00\u00F9\u0092\r\u00D4\u00BE\u008B*\x1E\u00B7\u00A8\x1Eu\x00\u00F8\x11\u00E6|W\u00A1~\u00CBw\u00FEX`\x7F\u00AF\u00FDus_[\u00F1N=\u00D8\x13\u0091\u008F\u0091\u00B8\u00BF\u00FA?h5}?s\u00FF\x00\u00B2\u0096\x0EvY2F\x065w\u00D7\u00B0\u00FE\u00E4U\u00CDC\u0092\x18dqC\u0087&\u009C&\u00F2~\u00F6\u00BF<\u00E4\u00FF\x00\u00FF\u00D0\u00E5\u00FE\u00AD\u00D5u\u0097fzM\u00A4\u00C1l\u00FA\u00C4\u008E\u00F6}\bk\u0096\u00E7\u00D93?s\x0F\u00EFw\u00FE\u0093\\\u009E\x16X\u00C4\u00B2\u00E2\u00FCQ\u0092,#n\u00E1\u00C4\x17}\x1Fk\u00FE\u0096\u00E5o\u00F6\u00D5\x7F\u00F9X\u00CF\u00B8\x7F\u00E9549O\u0087d\u0088\u009Eq\u00FA\u00D3\u00F3k\u0097\u00FC\x1F\u0093\u00D3\u00F2\u00B1\u00CB\u0097\u0094\u00C9\u0090\u00CE1\u00DF\u00E8{|u\u00FE\x15\u00BD\x0F\u00D93?s\x0F\u00EFw\u00FE\u0093X\x7FY*\u00BA\u00BB\u00B0\u00FDV\u00D2$\u00BA=\x12Oz\u00FE\u009C\u00B5\u00A8_\u00B6\u00AB\u00FF\x00\u00CA\u00C6}\u00C3\u00FF\x00I\u00AA\u0099\u00B9c.\u00CAK1F0\u00AC\u009D\u00DBG2[\u00F4\u00BD\u00AC\u00FA;R\u009F)\u00F0\u00ECq3\u00C0?Z>]r\u00FF\x00\u0085\u00F3\u00FA~UG\u0097\u0094\b\u0091\u00CE2W\u00E8{|\x17\u00FE\x15\u00BF\u00FF\u00D9\u00FF\u00ED\f\u00A6Photoshop 3.0\x008BIM\x04%\x00\x00\x00\x00\x00\x10\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x008BIM\x04:\x00\x00\x00\x00\x00\u00E5\x00\x00\x00\x10\x00\x00\x00\x01\x00\x00\x00\x00\x00\x0BprintOutput\x00\x00\x00\x05\x00\x00\x00\x00PstSbool\x01\x00\x00\x00\x00Inteenum\x00\x00\x00\x00Inte\x00\x00\x00\x00Clrm\x00\x00\x00\x0FprintSixteenBitbool\x00\x00\x00\x00\x0BprinterNameTEXT\x00\x00\x00\x01\x00\x00\x00\x00\x00\x0FprintProofSetupObjc\x00\x00\x00\f\x00P\x00r\x00o\x00o\x00f\x00 \x00S\x00e\x00t\x00u\x00p\x00\x00\x00\x00\x00\nproofSetup\x00\x00\x00\x01\x00\x00\x00\x00Bltnenum\x00\x00\x00\fbuiltinProof\x00\x00\x00\tproofCMYK\x008BIM\x04;\x00\x00\x00\x00\x02-\x00\x00\x00\x10\x00\x00\x00\x01\x00\x00\x00\x00\x00\x12printOutputOptions\x00\x00\x00\x17\x00\x00\x00\x00Cptnbool\x00\x00\x00\x00\x00Clbrbool\x00\x00\x00\x00\x00RgsMbool\x00\x00\x00\x00\x00CrnCbool\x00\x00\x00\x00\x00CntCbool\x00\x00\x00\x00\x00Lblsbool\x00\x00\x00\x00\x00Ngtvbool\x00\x00\x00\x00\x00EmlDbool\x00\x00\x00\x00\x00Intrbool\x00\x00\x00\x00\x00BckgObjc\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00RGBC\x00\x00\x00\x03\x00\x00\x00\x00Rd  doub@o\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00Grn doub@o\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00Bl  doub@o\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00BrdTUntF#Rlt\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00Bld UntF#Rlt\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00RsltUntF#Pxl@R\x00\x00\x00\x00\x00\x00\x00\x00\x00\nvectorDatabool\x01\x00\x00\x00\x00PgPsenum\x00\x00\x00\x00PgPs\x00\x00\x00\x00PgPC\x00\x00\x00\x00LeftUntF#Rlt\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00Top UntF#Rlt\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00Scl UntF#Prc@Y\x00\x00\x00\x00\x00\x00\x00\x00\x00\x10cropWhenPrintingbool\x00\x00\x00\x00\x0EcropRectBottomlong\x00\x00\x00\x00\x00\x00\x00\fcropRectLeftlong\x00\x00\x00\x00\x00\x00\x00\rcropRectRightlong\x00\x00\x00\x00\x00\x00\x00\x0BcropRectToplong\x00\x00\x00\x00\x008BIM\x03\u00ED\x00\x00\x00\x00\x00\x10\x00H\x00\x00\x00\x01\x00\x01\x00H\x00\x00\x00\x01\x00\x018BIM\x04&\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00?\u0080\x00\x008BIM\x04\r\x00\x00\x00\x00\x00\x04\x00\x00\x00Z8BIM\x04\x19\x00\x00\x00\x00\x00\x04\x00\x00\x00\x1E8BIM\x03\u00F3\x00\x00\x00\x00\x00\t\x00\x00\x00\x00\x00\x00\x00\x00\x01\x008BIM'\x10\x00\x00\x00\x00\x00\n\x00\x01\x00\x00\x00\x00\x00\x00\x00\x018BIM\x03\u00F5\x00\x00\x00\x00\x00H\x00/ff\x00\x01\x00lff\x00\x06\x00\x00\x00\x00\x00\x01\x00/ff\x00\x01\x00\u00A1\u0099\u009A\x00\x06\x00\x00\x00\x00\x00\x01\x002\x00\x00\x00\x01\x00Z\x00\x00\x00\x06\x00\x00\x00\x00\x00\x01\x005\x00\x00\x00\x01\x00-\x00\x00\x00\x06\x00\x00\x00\x00\x00\x018BIM\x03\u00F8\x00\x00\x00\x00\x00p\x00\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\x03\u00E8\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\x03\u00E8\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\x03\u00E8\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\x03\u00E8\x00\x008BIM\x04\b\x00\x00\x00\x00\x00\x10\x00\x00\x00\x01\x00\x00\x02@\x00\x00\x02@\x00\x00\x00\x008BIM\x04\x1E\x00\x00\x00\x00\x00\x04\x00\x00\x00\x008BIM\x04\x1A\x00\x00\x00\x00\x03W\x00\x00\x00\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00 \x00\x00\x00\x11\x00U\x00n\x00t\x00i\x00t\x00l\x00e\x00d\x00-\x001\x00 \x00c\x00o\x00p\x00y\x00 \x002\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x10\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00null\x00\x00\x00\x02\x00\x00\x00\x06boundsObjc\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00Rct1\x00\x00\x00\x04\x00\x00\x00\x00Top long\x00\x00\x00\x00\x00\x00\x00\x00Leftlong\x00\x00\x00\x00\x00\x00\x00\x00Btomlong\x00\x00\x00 \x00\x00\x00\x00Rghtlong\x00\x00\x00 \x00\x00\x00\x06slicesVlLs\x00\x00\x00\x01Objc\x00\x00\x00\x01\x00\x00\x00\x00\x00\x05slice\x00\x00\x00\x12\x00\x00\x00\x07sliceIDlong\x00\x00\x00\x00\x00\x00\x00\x07groupIDlong\x00\x00\x00\x00\x00\x00\x00\x06originenum\x00\x00\x00\fESliceOrigin\x00\x00\x00\rautoGenerated\x00\x00\x00\x00Typeenum\x00\x00\x00\nESliceType\x00\x00\x00\x00Img \x00\x00\x00\x06boundsObjc\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00Rct1\x00\x00\x00\x04\x00\x00\x00\x00Top long\x00\x00\x00\x00\x00\x00\x00\x00Leftlong\x00\x00\x00\x00\x00\x00\x00\x00Btomlong\x00\x00\x00 \x00\x00\x00\x00Rghtlong\x00\x00\x00 \x00\x00\x00\x03urlTEXT\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00nullTEXT\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00MsgeTEXT\x00\x00\x00\x01\x00\x00\x00\x00\x00\x06altTagTEXT\x00\x00\x00\x01\x00\x00\x00\x00\x00\x0EcellTextIsHTMLbool\x01\x00\x00\x00\bcellTextTEXT\x00\x00\x00\x01\x00\x00\x00\x00\x00\thorzAlignenum\x00\x00\x00\x0FESliceHorzAlign\x00\x00\x00\x07default\x00\x00\x00\tvertAlignenum\x00\x00\x00\x0FESliceVertAlign\x00\x00\x00\x07default\x00\x00\x00\x0BbgColorTypeenum\x00\x00\x00\x11ESliceBGColorType\x00\x00\x00\x00None\x00\x00\x00\ttopOutsetlong\x00\x00\x00\x00\x00\x00\x00\nleftOutsetlong\x00\x00\x00\x00\x00\x00\x00\fbottomOutsetlong\x00\x00\x00\x00\x00\x00\x00\x0BrightOutsetlong\x00\x00\x00\x00\x008BIM\x04(\x00\x00\x00\x00\x00\f\x00\x00\x00\x02?\u00F0\x00\x00\x00\x00\x00\x008BIM\x04\x11\x00\x00\x00\x00\x00\x01\x01\x008BIM\x04\x14\x00\x00\x00\x00\x00\x04\x00\x00\x00Q8BIM\x04\f\x00\x00\x00\x00\x03\u00AB\x00\x00\x00\x01\x00\x00\x00 \x00\x00\x00 \x00\x00\x00`\x00\x00\f\x00\x00\x00\x03\u008F\x00\x18\x00\x01\u00FF\u00D8\u00FF\u00ED\x00\fAdobe_CM\x00\x01\u00FF\u00EE\x00\x0EAdobe\x00d\u0080\x00\x00\x00\x01\u00FF\u00DB\x00\u0084\x00\f\b\b\b\t\b\f\t\t\f\x11\x0B\n\x0B\x11\x15\x0F\f\f\x0F\x15\x18\x13\x13\x15\x13\x13\x18\x11\f\f\f\f\f\f\x11\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\x01\r\x0B\x0B\r\x0E\r\x10\x0E\x0E\x10\x14\x0E\x0E\x0E\x14\x14\x0E\x0E\x0E\x0E\x14\x11\f\f\f\f\f\x11\x11\f\f\f\f\f\f\x11\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\u00FF\u00C0\x00\x11\b\x00 \x00 \x03\x01\"\x00\x02\x11\x01\x03\x11\x01\u00FF\u00DD\x00\x04\x00\x02\u00FF\u00C4\x01?\x00\x00\x01\x05\x01\x01\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x00\x03\x00\x01\x02\x04\x05\x06\x07\b\t\n\x0B\x01\x00\x01\x05\x01\x01\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x00\x01\x00\x02\x03\x04\x05\x06\x07\b\t\n\x0B\x10\x00\x01\x04\x01\x03\x02\x04\x02\x05\x07\x06\b\x05\x03\f3\x01\x00\x02\x11\x03\x04!\x121\x05AQa\x13\"q\u00812\x06\x14\u0091\u00A1\u00B1B#$\x15R\u00C1b34r\u0082\u00D1C\x07%\u0092S\u00F0\u00E1\u00F1cs5\x16\u00A2\u00B2\u0083&D\u0093TdE\u00C2\u00A3t6\x17\u00D2U\u00E2e\u00F2\u00B3\u0084\u00C3\u00D3u\u00E3\u00F3F'\u0094\u00A4\u0085\u00B4\u0095\u00C4\u00D4\u00E4\u00F4\u00A5\u00B5\u00C5\u00D5\u00E5\u00F5Vfv\u0086\u0096\u00A6\u00B6\u00C6\u00D6\u00E6\u00F67GWgw\u0087\u0097\u00A7\u00B7\u00C7\u00D7\u00E7\u00F7\x11\x00\x02\x02\x01\x02\x04\x04\x03\x04\x05\x06\x07\x07\x06\x055\x01\x00\x02\x11\x03!1\x12\x04AQaq\"\x13\x052\u0081\u0091\x14\u00A1\u00B1B#\u00C1R\u00D1\u00F03$b\u00E1r\u0082\u0092CS\x15cs4\u00F1%\x06\x16\u00A2\u00B2\u0083\x07&5\u00C2\u00D2D\u0093T\u00A3\x17dEU6te\u00E2\u00F2\u00B3\u0084\u00C3\u00D3u\u00E3\u00F3F\u0094\u00A4\u0085\u00B4\u0095\u00C4\u00D4\u00E4\u00F4\u00A5\u00B5\u00C5\u00D5\u00E5\u00F5Vfv\u0086\u0096\u00A6\u00B6\u00C6\u00D6\u00E6\u00F6'7GWgw\u0087\u0097\u00A7\u00B7\u00C7\u00FF\u00DA\x00\f\x03\x01\x00\x02\x11\x03\x11\x00?\x00\u00E0\u00A9\u00A5\u00F7\u00D9h\u00F5\u00BD0\u00C3\u00A0'\u00C4\u009F1\u00E0\u008D\u00F6\x07\x7F\u00DC\u00B1\u00F7\u00FF\x00\u00E6K_\u00EA\u0086)\u00C8\u00BB>21\u00F1\u00F6\u0096\x7FH\u00EF&\u00DF\u00A1\u00EEg\u00F6\u0097K\u00FB-\u00DF\u00F9a\u0081\u00FE\u00BF\u00F5\u00D5G?;,y%\x01\x1B\u00AA\u00EB\u00DC\x7FrN\u00AF+\x0EH\u00E1\u0089\u00CB\x0E,\u009A\u00F1\x1B\u00C9\u00FB\u00DA|\u0093\u008B\u00C1\u00FD\u0081\u00DF\u00F7,}\u00FF\x00\u00F9\u0092\r\u00D4\u00BE\u008B*\x1E\u00B7\u00A8\x1Eu\x00\u00F8\x11\u00E6|W\u00A1~\u00CBw\u00FEX`\x7F\u00AF\u00FDus_[\u00F1N=\u00D8\x13\u0091\u008F\u0091\u00B8\u00BF\u00FA?h5}?s\u00FF\x00\u00B2\u0096\x0EvY2F\x065w\u00D7\u00B0\u00FE\u00E4U\u00CDC\u0092\x18dqC\u0087&\u009C&\u00F2~\u00F6\u00BF<\u00E4\u00FF\x00\u00FF\u00D0\u00E5\u00FE\u00AD\u00D5u\u0097fzM\u00A4\u00C1l\u00FA\u00C4\u008E\u00F6}\bk\u0096\u00E7\u00D93?s\x0F\u00EFw\u00FE\u0093\\\u009E\x16X\u00C4\u00B2\u00E2\u00FCQ\u0092,#n\u00E1\u00C4\x17}\x1Fk\u00FE\u0096\u00E5o\u00F6\u00D5\x7F\u00F9X\u00CF\u00B8\x7F\u00E9549O\u0087d\u0088\u009Eq\u00FA\u00D3\u00F3k\u0097\u00FC\x1F\u0093\u00D3\u00F2\u00B1\u00CB\u0097\u0094\u00C9\u0090\u00CE1\u00DF\u00E8{|u\u00FE\x15\u00BD\x0F\u00D93?s\x0F\u00EFw\u00FE\u0093X\x7FY*\u00BA\u00BB\u00B0\u00FDV\u00D2$\u00BA=\x12Oz\u00FE\u009C\u00B5\u00A8_\u00B6\u00AB\u00FF\x00\u00CA\u00C6}\u00C3\u00FF\x00I\u00AA\u0099\u00B9c.\u00CAK1F0\u00AC\u009D\u00DBG2[\u00F4\u00BD\u00AC\u00FA;R\u009F)\u00F0\u00ECq3\u00C0?Z>]r\u00FF\x00\u0085\u00F3\u00FA~UG\u0097\u0094\b\u0091\u00CE2W\u00E8{|\x17\u00FE\x15\u00BF\u00FF\u00D9\x008BIM\x04!\x00\x00\x00\x00\x00]\x00\x00\x00\x01\x01\x00\x00\x00\x0F\x00A\x00d\x00o\x00b\x00e\x00 \x00P\x00h\x00o\x00t\x00o\x00s\x00h\x00o\x00p\x00\x00\x00\x17\x00A\x00d\x00o\x00b\x00e\x00 \x00P\x00h\x00o\x00t\x00o\x00s\x00h\x00o\x00p\x00 \x00C\x00C\x00 \x002\x000\x001\x004\x00\x00\x00\x01\x008BIM\x04\x06\x00\x00\x00\x00\x00\x07\x00\x06\x00\x00\x00\x01\x01\x00\u00FF\u00E1\x0EDhttp://ns.adobe.com/xap/1.0/\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c014 79.156797, 2014/08/20-09:53:02        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC 2014 (Windows)\" xmp:CreateDate=\"2015-08-12T13:41:17-04:00\" xmp:ModifyDate=\"2015-08-12T13:43:30-04:00\" xmp:MetadataDate=\"2015-08-12T13:43:30-04:00\" dc:format=\"image/jpeg\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:bae0d78a-51f2-e446-ab5d-1713cc0d6cef\" xmpMM:DocumentID=\"adobe:docid:photoshop:a5247935-4119-11e5-b001-b19a06bf0f09\" xmpMM:OriginalDocumentID=\"xmp.did:b907cdb7-7e65-5a47-8596-9d854122c17a\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:b907cdb7-7e65-5a47-8596-9d854122c17a\" stEvt:when=\"2015-08-12T13:41:17-04:00\" stEvt:softwareAgent=\"Adobe Photoshop CC 2014 (Windows)\"/> <rdf:li stEvt:action=\"converted\" stEvt:parameters=\"from application/vnd.adobe.photoshop to image/jpeg\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:bae0d78a-51f2-e446-ab5d-1713cc0d6cef\" stEvt:when=\"2015-08-12T13:43:30-04:00\" stEvt:softwareAgent=\"Adobe Photoshop CC 2014 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <?xpacket end=\"w\"?>\u00FF\u00EE\x00\x0EAdobe\x00d@\x00\x00\x00\x01\u00FF\u00DB\x00\u0084\x00\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x03\x02\x02\x02\x03\x04\x03\x02\x02\x03\x04\x05\x04\x04\x04\x04\x04\x05\x06\x05\x05\x05\x05\x05\x05\x06\x06\x07\x07\b\x07\x07\x06\t\t\n\n\t\t\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\x01\x03\x03\x03\x05\x04\x05\t\x06\x06\t\r\n\t\n\r\x0F\x0E\x0E\x0E\x0E\x0F\x0F\f\f\f\f\f\x0F\x0F\f\f\f\f\f\f\x0F\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\u00FF\u00C0\x00\x11\b\x00 \x00 \x03\x01\x11\x00\x02\x11\x01\x03\x11\x01\u00FF\u00DD\x00\x04\x00\x04\u00FF\u00C4\x01\u00A2\x00\x00\x00\x07\x01\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x04\x05\x03\x02\x06\x01\x00\x07\b\t\n\x0B\x01\x00\x02\x02\x03\x01\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x00\x01\x00\x02\x03\x04\x05\x06\x07\b\t\n\x0B\x10\x00\x02\x01\x03\x03\x02\x04\x02\x06\x07\x03\x04\x02\x06\x02s\x01\x02\x03\x11\x04\x00\x05!\x121AQ\x06\x13a\"q\u0081\x142\u0091\u00A1\x07\x15\u00B1B#\u00C1R\u00D1\u00E13\x16b\u00F0$r\u0082\u00F1%C4S\u0092\u00A2\u00B2cs\u00C25D'\u0093\u00A3\u00B36\x17Tdt\u00C3\u00D2\u00E2\b&\u0083\t\n\x18\x19\u0084\u0094EF\u00A4\u00B4V\u00D3U(\x1A\u00F2\u00E3\u00F3\u00C4\u00D4\u00E4\u00F4eu\u0085\u0095\u00A5\u00B5\u00C5\u00D5\u00E5\u00F5fv\u0086\u0096\u00A6\u00B6\u00C6\u00D6\u00E6\u00F67GWgw\u0087\u0097\u00A7\u00B7\u00C7\u00D7\u00E7\u00F78HXhx\u0088\u0098\u00A8\u00B8\u00C8\u00D8\u00E8\u00F8)9IYiy\u0089\u0099\u00A9\u00B9\u00C9\u00D9\u00E9\u00F9*:JZjz\u008A\u009A\u00AA\u00BA\u00CA\u00DA\u00EA\u00FA\x11\x00\x02\x02\x01\x02\x03\x05\x05\x04\x05\x06\x04\b\x03\x03m\x01\x00\x02\x11\x03\x04!\x121A\x05Q\x13a\"\x06q\u0081\u00912\u00A1\u00B1\u00F0\x14\u00C1\u00D1\u00E1#B\x15Rbr\u00F13$4C\u0082\x16\u0092S%\u00A2c\u00B2\u00C2\x07s\u00D25\u00E2D\u0083\x17T\u0093\b\t\n\x18\x19&6E\x1A'dtU7\u00F2\u00A3\u00B3\u00C3()\u00D3\u00E3\u00F3\u0084\u0094\u00A4\u00B4\u00C4\u00D4\u00E4\u00F4eu\u0085\u0095\u00A5\u00B5\u00C5\u00D5\u00E5\u00F5FVfv\u0086\u0096\u00A6\u00B6\u00C6\u00D6\u00E6\u00F6GWgw\u0087\u0097\u00A7\u00B7\u00C7\u00D7\u00E7\u00F78HXhx\u0088\u0098\u00A8\u00B8\u00C8\u00D8\u00E8\u00F89IYiy\u0089\u0099\u00A9\u00B9\u00C9\u00D9\u00E9\u00F9*:JZjz\u008A\u009A\u00AA\u00BA\u00CA\u00DA\u00EA\u00FA\u00FF\u00DA\x00\f\x03\x01\x00\x02\x11\x03\x11\x00?\x00\u00F9%\u00A3\u00E9\x17z\u00FE\u00A1\u00AEE\u00FE%:4z}\u00C7\x18\u0092Gn,\x1D\u00E4\x00(\u00F5\x12\u0081xf6|\u00E7\x15TL\u00AF\u00B9\u00EE=\u008D\u00F6G\x07\u00B4\x077\u008D\u00AC\u00C7\u00A5\u00F0\u00F8k\u00C4\u00AF_\x17\x17+\u0094~\u009E\x1D\u00F9\u00F3\f\u008B\u00FC\ts\u00FF\x00S\u00FC\x7F\u00F0g\u00FE\u00ABf?\u00E7\u00A5\u00FE\u00A6\x7F\x1F\x07\u00B8\u00FF\x00\u0093E\u00A1\u00FF\x00\u00A2\u00CE\u009B\u00FD\u008F\u00FDTw\u00F8\x12\u00E7\u00FE\u00A7\u00F8\u00FF\x00\u00E0\u00CF\u00FDV\u00C7\u00F3\u00D2\u00FF\x00S?\u008F\u0082\u00FF\x00\u00C9\u00A2\u00D0\u00FF\x00\u00D1gM\u00FE\u00C7\u00FE\u00AA1\u00DDcH\u00BB\u00D05\r\x0E/\u00F1)\u00D6c\u00D4.8\u00CA\u0091\u00BBqP\u008F\x18!\u0087\u00A8\u00F5\r\u00CF20g9n\u00E2c]\u00EF\x0F\u00ED\u0097\u00B28=\u009F8|\x1Df=W\u0089\u00C5~\x1Dz8xy\u00D4\u00A5\u00F5qm\u00CB\u0091\x7F\u00FF\u00D0\u00F1\u00F7\u00FC\u00E2\x0F\u0096\x1F\u00CC\u009A\u00BF\u00E6\u00C0O7yS\u00CA\u00BFS\u00B8\u00D3\u00AA|\u00CE\t\u00F5\u00FDI/\u00BF\u00DEzO\x0F\u00D8\u00E3\u00F1\u00F5\u00EA\u00BD3\u00CD\x7F\u00E0\u0089\u008E3\x1A~(f\u009F\u00D7\u00FD\u00D7O\u00A7\u00EA\u00F4\u00CB\u00E1\u00F1{\u00EFa\u00FBw/e\u009C\u00FC\x03\x11\u00E3\u00E1\u00FE\u00F0\x13\u00CB\u008B\u00E9\u00A2;\u00F7\u00F8>\u00DD\u00FF\x00\u0095_?\u00FE]\u00DF\u00CA\u009F\u00F8\x13\u00FF\x00e\u00B9\u00E6\x7F\u0097\u00C5\u00FE\u00A3\u00AB\u00F9\u008F\u00F8\u0087\u00BF\u00FF\x00GZ\u009F\u00E6i~G\u00FE)\u00DF\u00F2\u00AB\u00E7\u00FF\x00\u00CB\u00BB\u00F9S\u00FF\x00\x02\x7F\u00EC\u00B7\x1F\u00CB\u00E2\u00FF\x00Q\u00D5\u00FC\u00C7\u00FCB\u00FF\x00\u00A3\u00ADO\u00F34\u00BF#\u00FF\x00\x14\u00F8\u008B\u00FEr\u00FB\u00CB\x0F\u00E5\u00BD_\u00F2\u009C?\u009B\u00BC\u00A9\u00E6\u00AF\u00AE\\j4>X\x04z\x1E\u009C\u0096?\u00EFEg\u009B\u00ED\u00F2\u00F8:tn\u00B9\u00E9\u009F\u00F0;\u00C7\x18\rG\f3C\u00E8\u00FE\u00F7\u00AF\u00D5\u00F4\u00FAc\u00F1\u00F8<\x07\u00B7\x1D\u00BB\u0097\u00B5\x0E\x0E1\u0088pq\x7Fv\b\u00E7\u00C3\u00F5Y=\u00DB|_\u00FF\u00D1\u00F0g\u00FC\u00E3~\u0095\u00ACjz\u00B7\u00E6O\u00E8\u009Bo.\u00DCz\x17\x16~\u00BF\u00E9\u00F7\u0091)\u00CAK\u00BE>\u008F\u00A7\x14\u00B5\u00AD\x0F*\u00D3\u00B6W\u0093\u00FE\x07\u00D3\u00F6\u00B3h\u00EA|\x0F\x07\u00CE\u00B8\u00B8\u00FF\x00W\x07\u00DA\u00F2\u009E\u00D4v\u00E6.\u00CC\u00F0\u00FCHN\\|U\u00C1]+\u009D\u0091\u00DF\u00B3\u00EA\u009F\u00F0\u00AF\u009C?\u00EA\u00D9\u00F9w\u00FF\x00#\u00EE?\u00EC\u0097+\u00FF\x00\u0099|\u00CD\u00FF\x00E\x13\u00FE\u0098\u00FE\u00A7\u0093\u00FF\x00G:_\u00F5,\u00FF\x00!\u00FA\u00DD\u00FE\x15\u00F3\u0087\u00FD[?.\u00FF\x00\u00E4}\u00C7\u00FD\u0092\u00E3\u00FF\x002\u00F9\u009B\u00FE\u008A'\u00FD1\u00FDK\u00FE\u008Et\u00BF\u00EAY\u00FEC\u00F5\u00BEV\u00FF\x00\u009C\u0090\u00D2\u00B5\u008D3V\u00FC\u00B6\u00FD-m\u00E5\u00DB\x7F^\u00E2\u00F3\u00D0\u00FD\x00\u00F2=x\u00C9i\u00CB\u00D6\u00F5\"\u008A\u0094\u00A8\u00E3J\u00F7\u00CB1\u00FF\x00\u00C0\u00FA~\u00C9\u00ED-O\u008F\u00E3y\u00DF\x0F\x07\u00EB\u00E3\u00FB\x1E\u00B3\u00D9~\u00DC\u00C5\u00DA~'\u0087\t\u00C7\u0083\u0086\u00F8\u00EB\u00AD\u00F2\u00A2{\u00B7\x7F\u00FF\u00D2\u00F9_\u00E4\u00CF6/\u00935\x1F2\u00CBy\u00E4\x18|\u00DF\x1E\u00AF:5\u00B3\u00DD\u00C7\u00F0\u00C2\"yMc-\x04\u00A0\u0087\x12\n\u00D2\u009D\x07\\\u00E9\u00FD\u009B\u00F6\u0087\x17d\u00F8\u009E&\u009E\x19\u00F8\u00F8k\u008E\u00BD<7\u00CA\u00E3.w\u00BF\u00B9\u00D9\u00F6~\u00BE:^.,bw\\\u00FAU\u00F9\x16\x7F\u00FF\x00+\u009FM\u00FF\x00\u00CB\x1B\u00A6\x7F\u00C8\u00B4\u00FF\x00\u00B2,\u00EA?\u00E4\u00E1\u00E9\x7F\u00E8\u009D\u0087\u00EC\u00FF\x00\u0088v_\u00CB\u00D8\u00FF\x00\u00E5\x1E\x1Fg\u00EAw\u00FC\u00AE}7\u00FF\x00,n\u0099\u00FF\x00\"\u00D3\u00FE\u00C8\u00B1\u00FF\x00\u0093\u0087\u00A5\u00FF\x00\u00A2v\x1F\u00B3\u00FE!\x7F\u0097\u00B1\u00FF\x00\u00CA<>\u00CF\u00D4\u00C0<\u00E7\u00E6\u00C5\u00F3\u009E\u00A3\u00E5\u00A9l\u00FC\u0083\x0F\u0094#\u00D2'v\u00B9{H\u00FE\x19\u0084\u00AF\x11\u00AC\u0085`\u0088\x00\u00823J\u00D7\u00A9\u00E9\u009C\u00BF\u00B4\u009E\u00D0\u00E2\u00EDo\x0F\u00C3\u00D3\u00C3\x07\x07\x15\u00F0W\u00AB\u008A\u00B9\u00D4c\u00CA\u00B6\u00F7\u00BA\u00DE\u00D0\u00D7\u00C7U\u00C3\u00C3\u008CB\u00AF\u0097[\u00AF \u00FF\x00\u00FF\u00D9";
                var prism_button_cycleColours_image = createResourceFile ("prism_button_cycleColours.png", prism_button_cycleColours, getUserDataFolder());
                var prism_button_cycleColours_rollover_image = createResourceFile ("prism_button_cycleColours_rollover.png", prism_button_cycleColours_rollover, getUserDataFolder());

                var buttonSimple = win.buttonGroup.add("iconbutton", undefined, ScriptUI.newImage(prism_button_cycleColours_image, undefined, undefined, prism_button_cycleColours_rollover_image),{style: "toolbutton", toggle:0} );
            } catch(e) {
                var buttonSimple = win.buttonGroup.add('button', undefined, 'Colour Each Layer');
            }
        } // end dumbColour button

    if (win instanceof Window) {
        win.show();
    } else {
        win.layout.layout(true);
    }
} // end createPalette

el_prism_createPalette(this);