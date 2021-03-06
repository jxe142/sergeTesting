<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<!-- saved from url=(0040)http://www.columbia.edu/~fdc/sample.html -->
<html class="gr__columbia_edu">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=windows-1252" />
      <!--Added this / to close tag-->
      <!-- THIS IS A COMMENT -->
      <title>Sample Web Page</title>
   </head>
   <body bgcolor="#ffffff" text="#000000" data-gr-c-s-loaded="true">
      <h2>Sample Web Page</h2>
      <!-- How to insert an image -->
      <img src="./Sample Web Page_files/picture-of-something.jpg" alt="Brief description" width="100%" /><br />
      <small><i>A random photo, maximize your browser to enlarge.</i></small>
      <p>
         <a href="http://www.columbia.edu/~fdc/">Frank da Cruz</a><br />
         Sat Jan 17 12:07:32 2004
      </p>
      <h3><a name="contents">CONTENTS</a></h3>
      <ol>
         <li><a href="http://www.columbia.edu/~fdc/sample.html#basics">Creating a Web Page</a></li>
         <li><a href="http://www.columbia.edu/~fdc/sample.html#syntax">HTML Syntax</a></li>
         <li><a href="http://www.columbia.edu/~fdc/sample.html#chars">Special Characters</a></li>
         <li><a href="http://www.columbia.edu/~fdc/sample.html#convert">Converting Plain Text to HTML</a></li>
         <li><a href="http://www.columbia.edu/~fdc/sample.html#effects">Effects</a></li>
         <li><a href="http://www.columbia.edu/~fdc/sample.html#lists">Lists</a></li>
         <li><a href="http://www.columbia.edu/~fdc/sample.html#links">Links</a></li>
         <li><a href="http://www.columbia.edu/~fdc/sample.html#tables">Tables</a></li>
         <li><a href="http://www.columbia.edu/~fdc/sample.html#install">Installing your Web Page on the Internet</a></li>
         <li><a href="http://www.columbia.edu/~fdc/sample.html#more">Where to go from here</a></li>
      </ol>
      <p></p>
      <hr />
      <h3><a name="basics">1. Creating a Web Page</a></h3>
      This page was typed by hand.  Anybody can do this, you don't need any
      special "web creation" tools or HTML editors, and the pages you make can be
      viewed from any browser.  To see how this page was made, choose
      <b>View Source</b> (or View Page Source, or View Document Source) in your
      browser's menu.  A simple web page like this one is just plain text with
      HTML commands (markup) mixed in.  HTML commands themselves are plain text.
      <p>
         When you're just learning and want to experiment, you can do everything on
         your PC.  Create a new directory ("folder") for your website, and then put
         the web-page files (HTML plus any pictures) in it.  Use NotePad or other
         plain-text editor (not word processor) on your PC to create an
         <tt>index.html</tt> file, which you can view locally with your Web browser.
         (You can also use word processors such as Word or WordPad if you save in
         "plain text", "text", "text document", or "text document MS-DOS format".)
         <a href="http://www.columbia.edu/~fdc/sample.html#install">Later</a> I'll explain how you can install your web site on
         the Internet.
      </p>
      <p></p>
      <dl>
         <dt><i>Example for Windows:</i>
         </dt>
         <dd>Move your mouse cursor to the desktop.  Right-click,
            choose <i>New</i>, then choose <i>Folder</i>, and a "New Folder" appears,
            with its name highlighted.  Type "Web" to change the folder's name to Web
            (or anything else you want).  Then 
            <i>Start</i>&nbsp;<tt>-&gt;</tt>&nbsp;<i>Run</i> and type "notepad" to
            start NotePad.  Now you can create your first Web page.
         </dd>
      </dl>
      <hr />
      <h3><a name="syntax">2. HTML Syntax</a></h3>
      Web pages are written in Hyper Text Markup Language (HTML).  HTML has three
      special characters:
      <tt>&lt;</tt>, <tt>&amp;</tt>, <tt>&gt;</tt>.
      An HTML command is enclosed in <tt>&lt;...&gt;</tt>, for example 
      <tt>&lt;p&gt;</tt>, which is a paragraph separator, or <tt>&lt;b&gt;</tt>
      ("begin bold") and <tt>&lt;/b&gt;</tt> ("end bold").  So the following
      HTML text:
      <p></p>
      <blockquote>
         <pre>This sentence contains &lt;b&gt;bold&lt;/b&gt; text.
</pre>
      </blockquote>
      <p>
         produces:
      </p>
      <p></p>
      <blockquote>
         This sentence contains <b>bold</b> text.
      </blockquote>
      <p>
         A Web page starts with a series of HTML commands, and ends with
         a few more.  The contents go in between:
      </p>
      <p></p>
      <blockquote>
         <pre>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Sample Web Page&lt;/title&gt;
&lt;META http-equiv="Content-Type" content="text/html; charset=iso-8859-1"&gt;
&lt;/head&gt;
&lt;body bgcolor="#ffffff" text="#000000"&gt;
</pre>
         <p>
            <i>(Contents go here)</i>
         </p>
         <p></p>
         <pre>&lt;/body&gt;
&lt;/html&gt;
</pre>
      </blockquote>
      <p>
         The first line (DOCTYPE) specifies which language the page uses; just copy
         this line<sup><small>1</small></sup>.  The next line, <tt>&lt;html&gt;</tt>,
         starts the page, and is matched by the last line, <tt>&lt;/html&gt;</tt>,
         which closes the page.  <tt>&lt;head&gt;</tt>, starts the heading, which
         contains a title to be displayed on the browser's title bar and a
         declaration of the character set (usually US-ASCII, ISO-8859-1, or UTF-8).
         <tt>&lt;/head&gt;</tt> closes the heading.
      </p>
      <p>
         The <tt>&lt;body&gt;</tt> statement starts the body of the document and can
         contain specifiers for color and other attributes.  This one chooses black
         writing on a white background.  The body is closed by
         <tt>&lt;/body&gt;</tt> statement.
      </p>
      <p>
         As you can see, most HTML commands (but not all!) come in begin-end pairs:
         <tt>&lt;b&gt;...&lt;/b&gt;</tt>,
         <tt>&lt;head&gt;...&lt;/head&gt;</tt>, etc.  The closing part of the command
         has a slash (<tt>/</tt>) between the <tt>&lt;</tt> and the first letter of
         the command.
      </p>
      <p>
         Blank lines and line breaks are ignored.  The browser automatically "flows"
         your text into lines and paragraphs that fit in its window.  Paragraphs must
         be separated by <tt>&lt;p&gt;</tt>.  Line breaks can be forced by
         <tt>&lt;br&gt;</tt>.
      </p>
      <p></p>
      <dl>
         <dt><i>Example for Windows:</i>
         </dt>
         <dd>
            Use the mouse to copy the HTML above into NotePad.  Then save the file
            (<i>File</i>&nbsp;<tt>-&gt;</tt>&nbsp;<i>Save&nbsp;As...</i>)
            in your Web directory as <tt>index.html</tt>.  Suppose your Windows username
            is Olga.  Then (depending on which version of Windows you have) this might
            be:
            <p></p>
            <blockquote>
               <pre><tt>C:\Documents and Settings\Olga\Desktop\Web\index.html</tt>
</pre>
            </blockquote>
            <p>
               Now to see your new web page, just double-click on the Web folder and
               then double-click on <tt>index.html</tt>.
            </p>
         </dd>
      </dl>
      <p>
         Now you're ready to start adding "content" to your web page.  Go back to
         NotePad and replace the title and "(Contents go here)" with whatever you
         want.  Any time you want to see the result, use
         <i>File</i>&nbsp;<tt>-&gt;</tt>&nbsp;<i>Save</i> in NotePad and then
         click the Reload button on your browser.
      </p>
      <p>
         The next sections tell how to achieve different kinds of effects.
         <br />__________________<br />
         <small />
      </p>
      <ol>
         <li><small>HTML 4.01 is chosen because it supports tables (new to HTML 3.2)
            as well as a couple other desirable features, such as the ability to specify
            an image width as a percentage of the Browser's window width, and a bunch more
            character entity symbols such as</small> <tt>&amp;euro;</tt>
            <small>(new&nbsp;to&nbsp;4.01).  Otherwise we would stick with the oldest
            available verifiable version, which is 2.0.</small>
         </li>
      </ol>
      <p></p>
      <hr />
      <h3><a name="chars">3. Special Characters</a></h3>
      HTML special "character entities" start with ampersand (<tt>&amp;</tt>) and
      end with semicolon (<tt>;</tt>), like "<tt>&amp;euro;</tt>" = "�".  The
      ever-popular "no-break space" is <tt>&amp;nbsp;</tt>.  There are special
      entity names for accented Latin letters and other West European special
      characters such as:
      <p></p>
      <blockquote>
         <table border="">
            <tbody>
               <tr>
                  <td><tt>&amp;auml;</tt></td>
                  <td>a-umlaut</td>
                  <td>&nbsp;�&nbsp;
                  </td>
               </tr>
               <tr>
                  <td><tt>&amp;Auml;</tt></td>
                  <td>A-umlaut </td>
                  <td>&nbsp;�&nbsp;
                  </td>
               </tr>
               <tr>
                  <td><tt>&amp;aacute;</tt></td>
                  <td>a-acute </td>
                  <td>&nbsp;�&nbsp;
                  </td>
               </tr>
               <tr>
                  <td><tt>&amp;agrave;</tt></td>
                  <td>a-grave </td>
                  <td>&nbsp;�&nbsp;
                  </td>
               </tr>
               <tr>
                  <td><tt>&amp;ntilde;</tt></td>
                  <td>n-tilde </td>
                  <td>&nbsp;�&nbsp;
                  </td>
               </tr>
               <tr>
                  <td><tt>&amp;szlig;</tt></td>
                  <td>German double-s</td>
                  <td>&nbsp;�&nbsp;
                  </td>
               </tr>
               <tr>
                  <td><tt>&amp;thorn;</tt></td>
                  <td>Icelandic thorn </td>
                  <td>&nbsp;�&nbsp;</td>
               </tr>
            </tbody>
         </table>
      </blockquote>
      <p>
         Examples:
      </p>
      <dl>
         <dt>For <b>Spanish</b> you would need:</dt>
        <dd>
            <tt>&amp;Aacute;</tt> (�),
            <tt>&amp;aacute;</tt> (�),
            <tt>&amp;Eacute;</tt> (�),
            <tt>&amp;eacute;</tt> (�),
            <tt>&amp;Iacute;</tt> (�),
            <tt>&amp;iacute;</tt> (�),
            <tt>&amp;Oacute;</tt> (�),
            <tt>&amp;oacute;</tt> (�),
            <tt>&amp;Uacute;</tt> (�),
            <tt>&amp;uacute;</tt> (�),
            <tt>&amp;Ntilde;</tt> (�),
            <tt>&amp;ntilde;</tt> (�);
            <tt>&amp;iquest;</tt> (�);
            <tt>&amp;iexcl;</tt> (�).<br />
            Example: A�orar�n = <tt>A&amp;ntilde;orar&amp;aacute;n</tt>.
            <p>
            </p>
        </dd>

         <dt>For <b>German</b> you would need:</dt>
         <dd><tt>&amp;Auml;</tt> (�),
            <tt>&amp;auml;</tt> (�),
            <tt>&amp;Ouml;</tt> (�),
            <tt>&amp;ouml;</tt> (�),
            <tt>&amp;Uuml;</tt> (�),
            <tt>&amp;uuml;</tt> (�),
            <tt>&amp;szlig;</tt> (�).<br />
            Example: Gr��e aus K�ln = <tt>Gr&amp;uuml;&amp;szlig;e aus K&amp;ouml;ln</tt>.
         </dd>
      </dl>
      <p>
         <a href="http://www.columbia.edu/~fdc/entities.html">CLICK HERE</a>
         for a complete list.  Cyrillic, Arabic, Hebrew, Greek. Japanese,
         etc, are a bit harder, but
         <a href="http://www.columbia.edu/~fdc/entities.html">doable</a>.
      </p>
      <p>
         If you want to include <tt>&lt;</tt>, <tt>&amp;</tt>, or <tt>&gt;</tt>
         literally in text to be displayed, you have to write <tt>&amp;lt;</tt>,
         <tt>&amp;amp;</tt>, <tt>&amp;gt;</tt>, respectively.
      </p>
      <p></p>
      <hr />
      <p>
      </p>
      <h3><a name="convert">4. Converting Plain Text to HTML</a></h3>
      If you have a plain text file that you want to convert to HTML, load the
      file into a plain-text editor and then follow these steps.
      <p></p>
      <ol>
         <li>Change all occurrences of "<tt>&amp;</tt>" to "<tt>&amp;amp;</tt>".</li>
         <li>Change all occurrences of "<tt>&lt;</tt>" to "<tt>&amp;lt;</tt>".</li>
         <li>Change all occurrences of "<tt>&gt;</tt>" to "<tt>&amp;gt;</tt>".</li>
         <li>Change any accented letters to HTML entity names (previous section).</li>
         <li>Put "<tt>&lt;p&gt;</tt>" between each paragraph.</li>
         <li>Insert the standard prolog at the top, substituting an appropriate title.</li>
         <li>Insert the standard epilog at the bottom.</li>
         <li>Save the result as <tt><i>xxx</i>.html</tt>, where
            <tt><i>xxx</i></tt> is the part of the original file's name before the dot.
            For example, if the original file was <tt>letter.txt</tt>, save the edited
            version as <tt>letter.html</tt>.
         </li>
      </ol>
      <p>
         If you are a <a href="http://www.columbia.edu/kermit/">Kermit</a> user, you
         can find a script to convert plain text to HTML
         <a href="http://www.columbia.edu/kermit/ckscripts.html#html">HERE</a>.
      </p>
      <p>
         If the text contains lists, tables, or other structures, read on.
      </p>
      <p>
         If you have a Microsoft Word document you want to convert to HTML, and your
         copy of Word does not allow the file to be "Saved As" HTML, then save it as
         plain text and follow the same instructions.  In this case you lose the
         "richness" (bold, italics, font changes, etc) when you save the file, and
         will have to put the effects back by hand (next section).
      </p>
      <p></p>
      <hr />
      <h3><a name="effects">5. Effects</a></h3>
      The rest of this document shows what you can do with simple HTML commands,
      but I don't explain how to do it.  To see that, just tell your browser
      to <b>View Source</b> and compare the HTML in the source window
      with the result in the original window.
      <p>
         <b>This sentence is bold.</b> <i>This sentence is
         in italics.</i> <b><i>This sentence is in bold italics.</i></b> <tt>This
         sentence is in typewriter font.</tt> This sentence has <u>underlined
         words</u> and <u><b>underlined bold words</b></u>.
         <font color="blue">This</font>
         <font color="red">sentence</font>
         <font color="green">has</font>
         <font color="brown">colored</font>
         <font color="magenta">words</font>.
         This sentence has <big>big
         words.</big> This one has <big><big>very big words</big></big>.  This one has
         <small><small>very small words.</small></small>
      </p>
      <p></p>
      <blockquote>
         This is a "blockquote", which is like a regular paragraph, but it has bigger
         margins.  Begin a blockquote with <tt>&lt;blockquote&gt;</tt> and end
         it with <tt>&lt;/blockquote&gt;</tt>.  Environments such as blockquotes,
         lists, etc, that have a beginning and an end always use paired commands like
         <tt>&lt;<i>blah</i>&gt;...&lt;<i>/blah</i>&gt;</tt>.
         <p></p>
         <blockquote>
            This is a blockquote inside another blockquote, which shows how HTML
            environments can be "nested".
         </blockquote>
         <p>
            Here we are back in the first blockquote again.
         </p>
      </blockquote>
      <p>
         And here we are back outside of the first blockquote.
      </p>
      <p></p>
      <hr />
      <p>
      </p>
      <h3><a name="lists">6. Lists</a></h3>
      Here is an Unordered (bullet) List (<tt>&lt;ul&gt;&gt;..&lt;/ul&gt;</tt>):
      <ul>
         <li>This is a List Item (<tt>&lt;li&gt;</tt>).</li>
         <li>This is another item.</li>
         <li>This is yet another item.</li>
      </ul>
      Here is an Ordered (numbered) List (<tt>&lt;ol&gt;&gt;..&lt;/ol&gt;</tt>):
      <p></p>
      <ol>
         <li>This is a List Item (<tt>&lt;li&gt;</tt>).</li>
         <li>This is another item.</li>
         <li>This is yet another item.</li>
      </ol>
      <p>
         And here is a Description List (<tt>&lt;dl&gt;</tt>).
         using Kermit commands as an example:
      </p>
      <p></p>
      <dl>
         <dt><tt>SET FILE TYPE BINARY</tt>
         </dt>
         <dd>
            This command tells Kermit to transfer files in binary mode.  In other
            words, don't mess with the file, just send it as-is.  The result on the
            receiving computer should be identical to the original.
            <p>
            </p>
         </dd>
         <dt><tt>SET FILE TYPE TEXT</tt>
         </dt>
         <dd>This command tells Kermit to transfer files in text mode.  This should be
            used with plain-text files, especially when transferring them between
            computers with different file formats or operating systems, such as VMS and
            Unix, or Unix and Windows.  It converts the file's format and character-set
            (if necessary) so the received file is usable on the destination computer.
         </dd>
      </dl>
      <p>
         You can have lists within lists:
      </p>
      <p></p>
      <ol>
         <li>A gromet</li>
         <li>A widget</li>
         <li>
            A framus, which consists of the following components:
            <ul>
               <li>A doohickey.</li>
               <li>
                  A veeblefetzer -- these come in several colors:
                  <ol>
                     <li>Purple</li>
                     <li>Purple</li>
                     <li>Purple</li>
                  </ol>
               </li>
               <li>A whatchamacallit.</li>
            </ul>
         </li>
         <li>A doodad.</li>
      </ol>
      <p>
         And you can have ordered lists that use letters instead of numbers:
      </p>
      <p>
      </p>
      <ol type="a">
         <li>Pennies</li>
         <li>Nickels</li>
         <li>Dimes</li>
         <li>Quarters</li>
      </ol>
      <p></p>
      <hr />
      <h3><a name="links">7. Links</a></h3>
      Links can be internal within a Web page (like to
      the <a href="http://www.columbia.edu/~fdc/sample.html#contents">Table of Contents</a> at the top), or they
      can be to external web pages or pictures on the same website, or they
      can be to websites, pages, or pictures anywhere else in the world.
      <p>
         Here is a link to the <a href="http://www.columbia.edu/kermit/">Kermit
         Project home page</a>.
      </p>
      <p>
         Here is a link to <a href="http://www.columbia.edu/~fdc/sample.html#lists">Section 5</a> of this document.
      </p>
      <p>
         Here is a link to
         <a href="http://www.columbia.edu/kermit/ckuins.html#x4.0">Section 4.0</a>
         of the <a href="http://www.columbia.edu/kermit/ckuins.html">C-Kermit
         for Unix Installation Instructions</a>.
      </p>
      <p>
         Here is a link to a picture:
         <a href="./Sample Web Page_files/picture-of-something.jpg">CLICK HERE</a> to see it.
      </p>
      <p></p>
      <hr />
      <h3><a name="tables">8. Tables</a></h3>
      Here's a simple table with some headings and a few rows:
      <p></p>
      <blockquote>
         <table>
            <tbody>
               <tr>
                  <!-- start table row -->
                  <th>
                     Heading A   <!-- table heading -->
                  </th>
                  <th>Heading B</th>
                  <th>Heading C</th>
               </tr>
               <tr>
                  <!-- start another row -->
                  <td>Cell 1A</td>
                  <td>Cell 1B</td>
                  <td>Cell 1C</td>
               </tr>
               <tr>
                  <!-- start another row -->
                  <td>Cell 2A</td>
                  <td>Cell 2B</td>
                  <td>Cell 2C</td>
               </tr>
               <tr>
                  <!-- start another row -->
                  <td>Cell 3A</td>
                  <td>Cell 3B</td>
                  <td>Cell 3C</td>
               </tr>
            </tbody>
         </table>
      </blockquote>
      <p>
         Same table again but with borders:
      </p>
      <p></p>
      <blockquote>
         <table border="">
            <tbody>
               <tr>
                  <!-- start table row -->
                  <th>
                     Heading A   <!-- table heading -->
                  </th>
                  <th>Heading B</th>
                  <th>Heading C</th>
               </tr>
               <tr>
                  <td>Cell 1A</td>
                  <td>Cell 1B</td>
                  <td>Cell 1C</td>
               </tr>
               <tr>
                  <td>Cell 2A</td>
                  <td>Cell 2B</td>
                  <td>Cell 2C</td>
               </tr>
               <tr>
                  <td>Cell 3A</td>
                  <td>Cell 3B</td>
                  <td>Cell 3C</td>
               </tr>
            </tbody>
         </table>
      </blockquote>
      <p>
         And again but with Column C right-adjusted:
      </p>
      <p></p>
      <blockquote>
         <table border="">
            <tbody>
               <tr>
                  <!-- start table row -->
                  <th>
                     Heading A   <!-- table heading -->
                  </th>
                  <th>Heading B</th>
                  <th>Heading C</th>
               </tr>
               <tr>
                  <td>Cell 1A</td>
                  <td>Cell 1B</td>
                  <td align="right">Cell 1C</td>
               </tr>
               <tr>
                  <td>Cell 2A</td>
                  <td>Cell 2B</td>
                  <td align="right">Cell 2C</td>
               </tr>
               <tr>
                  <td>Cell 3A</td>
                  <td>Cell 3B</td>
                  <td align="right">Cell 3C</td>
               </tr>
            </tbody>
         </table>
      </blockquote>
      <p></p>
      <hr />
      <h3><a name="install">9. Installing Your Web Page on the Internet</a></h3>
      How to put your web page on the Internet depends on your Internet Service
      Provider (ISP).  At Columbia University, each user has a "shell account" on
      the central server, which runs a Unix-based operating system, and which you
      can access with a Telnet, SSH, or modem program such as <a href="http://www.columbia.edu/kermit/">Kermit</a>.  Here's an example that
      applies to Columbia University's web server, showing how to upload your
      files from Windows:
      <p></p>
      <blockquote>
         <i>
         There are easier ways to do this than what I describe below, but they
         require add-on software.  The following method should work for everybody
         who has Windows and an Internet connection.
         </i>
      </blockquote>
      <p>
         If you create a <tt>public_html</tt> subdirectory of your login directory,
         give it world read and search permission, and then create an
         <tt>index.html</tt> file in that directory and give it world read
         permission, you'll have a home page.  In this example "<tt>$</tt>" is the
         shell prompt (yours might be different), and what you type is underlined.
         CAUTION: the directory name is <tt>public_html</tt> but the underscore might
         be obscured the underline in the examples below.  Whenenever typing
         "<tt>public_html</tt>" always include the underscore.
      </p>
      <p></p>
      <blockquote>
         <pre>$ <u>cd</u>                      <i>(Change to your login directory)</i>
$ <u>mkdir public_html</u>       <i>(Create</i> public_html <i>subdirectory)</i>
$ <u>chmod 755 public_html</u>   <i>(Give it world read/search permission)</i>
$ <u>cd public_html</u>          <i>(Enter the</i> public_html <i>subdirectory)</i>
</pre>
      </blockquote>
      <p>
         You only have to do this part once.
      </p>
      <p>
         Let's assume you have created a website in the Web folder on your PC.
         Here's an example of how to upload your Web files to your <tt>public_html</tt>
         directory on Columbia University's
         Cunix server using FTP (File Transfer Protocol).
         First start the FTP program:
      </p>
      <p></p>
      <blockquote>
         <i>Start</i>&nbsp;<tt>-&gt;</tt>&nbsp;<i>Run</i>
      </blockquote>
      <p>
         and type "ftp" in the box.  An FTP window opens and an "<tt>ftp&gt;</tt>"
         prompt appears.  Type the underlined commands at the "<tt>ftp&gt;</tt>"
         prompt (substituting your own user ID, etc):
      </p>
      <p></p>
      <blockquote>
         <pre>
ftp&gt; <u>lcd Desktop</u>
Local directory now C:\Documents and Settings\olga\Desktop.
ftp&gt; <u>lcd Web</u>
Local directory now C:\Documents and Settings\olga\Desktop\Web.
ftp&gt; <u>open cunix</u>
Connected to cunix.cc.columbia.edu.
220 Cunix FTP server (Version 5.60) ready.
User (cunix.cc.columbia.edu:(none)): <u>olga</u>
331 Password required for olga.
Password: <u><i>(type your password here)</i></u>
230 User olga logged in.
ftp&gt; <u>cd public_html</u>   <i>(That's</i> "public_html" <i>in case you can't see the underscore)</i>
ftp&gt; <u>binary</u>
ftp&gt; <u>put index.html</u>
200 PORT command successful.
150 Opening ASCII mode data connection for index.html.
226 Transfer complete.
ftp: 285 bytes sent in 0.00Seconds 285000.00Kbytes/sec.
ftp&gt; <u>site chmod 664 index.html</u>
200 CHMOD command successful
ftp&gt; <u>bye</u>
</pre>
      </blockquote>
      <p>
         This sends the <tt>index.html</tt> file to your <tt>public_html</tt>
         directory on the server.  You can send any other file by subsituting its
         name for "<tt>put index.html</tt>.  If you want to send all the files in
         your Web folder, replace "<tt>put index.html</tt> with "<tt>put&nbsp;*</tt>"
         (asterisk, meaning "all files" in this directory).  Always use binary mode
         unless you know what you're doing.
      </p>
      <p>
         If the "site chmod" command failed (this service is not supported by some
         FTP servers), you have one more step.  Before others can see your web files,
         you have to give them "world read" permission.  Again, log in to the server
         using a terminal emulator (Telnet, SSH, Kermit, whatever), and:
      </p>
      <p></p>
      <blockquote>
         <pre>$ <u>cd ~/public_html</u>        <i>(Enter the</i> public_html <i>subdirectory)</i>
$ <u>chmod 664 *</u>             <i>(Make all files publically readable)</i>
</pre>
      </blockquote>
      <p>
         Now you have a home page.  If you were at Columbia and your login ID was
         "olga", the address (URL) of your home page would be:
      </p>
      <p></p>
      <blockquote>
         <a href="http://www.columbia.edu/~olga/"><tt>http://www.columbia.edu/~olga/</tt></a>
      </blockquote>
      <p>
         If you want to add pictures to your Web page, you can upload those too (also
         with Kermit or FTP), and you also have to "chmod 664" all the files to make
         them readable by everybody.  Every time you add new files to your
         <tt>public_html</tt> directory, you have to "chmod&nbsp;664" them so they
         are accessible, either in the FTP session itself (as shown previously), or
         by logging in to the host and:
      </p>
      <p></p>
      <blockquote>
         <pre>$ <u>cd ~/public_html</u>   <i>(That's</i> "public_html" <i>in case you can't see the underscore)</i>
$ <u>chmod 664 *</u>
</pre>
      </blockquote>
      <p>
         Pictures should be in JPG or GIF format.  To include a picture ("image")
         in your page, include a statement like this at the desired spot:
      </p>
      <p></p>
      <blockquote>
         <pre>&lt;img src="<i>filename</i>" alt="brief description" width="100%"&gt;
</pre>
      </blockquote>
      <p>
         Replace <i>filename</i> by the name of the file (e.g. <tt>skyline.jpg</tt>).
         You can omit or experiment with the <tt>width=</tt> clause.  100% means
         "make the picture the same width as the browser window."
      </p>
      <p>
         Now you have your own home page on the Web, and your own URL (Uniform
         Resource Locator, or Web address).  In this example, the URL is:
      </p>
      <p></p>
      <blockquote>
         <a href="http://www.columbia.edu/~olga/"><tt>http://www.columbia.edu/~olga/</tt></a>
      </blockquote>
      <p>
         Of course, if you prefer, you can also do all the Web-page editing directly
         on the server, using an a server-based text editor like EMACS, Pico, or Vi
         while logged in to the Unix shell.  In that case you don't need to upload
         anything (except maybe photos), but then you also need to be more familiar
         with the server's Unix environment and commands and utilities.
      </p>
      <p></p>
      <hr />
      <h3><a name="more">10. Where to go from here</a></h3>
      Most Web pages are created by hideous bloated "Web Authoring" tools, which are
      designed to force readers to use a Web browser (such as IE) that is made by the
      same company that made the Web-authoring tool (e.g. Front Page).  If all you
      want is text with some pictures and links and maybe some tables, as opposed to
      spinning blinking popup holograms with streaming video and sound effects, it's
      best to keep it simple and do it yourself.  This is how the Web started off in
      the HTML 1.0 days of the early 1990s.  The ingenious thing was that it was
      self propogating.  If you saw a web page with a certain effect and wanted to
      know how it was done, you could simply "view source" to get the "source code"
      and then adapt it to your own page.  You can still do that with pages that
      look like this one, but since most Web pages are no longer made by hand,
      you'll often see tons of incomprehensible gibberish (the more special effects,
      the more gibberish).
      <p>
         If you have mastered the simple techniques shown in this page, you know the
         basics.  Which is more than can be said of many "web designers" who only
         know how to use prepackaged software to create web pages by picking things
         from menus and moving things around with a mouse.
      </p>
      <p>
         To learn more, follow these links:
      </p>
      <p></p>
      <ul>
         <li>The
            <a href="http://www.columbia.edu/~fdc/%3Ca%20href=" http:="" www.w3.org="" tr="" rec-html40="" cover.htmlminitoc="">HTML
            4.01 specification</a>
         </li>
         <li>You can check the validity of your web page 
            at the <a href="http://validator.w3.org/">W3C Markup Validation Service</a>.
         </li>
         <li>You can find lots more Web pages in the same simple style as this
            one at the <a href="http://www.columbia.edu/kermit/">Kermit Project</a>
            website.
         </li>
      </ul>
      <p>
         Don't worry that the HTML 4.01 specification says that everything from HTML
         1.0 is "deprecated" and we're supposed to be using XHTML or XML and
         "cascading style sheets" or whatever.  They're not allowed to take the
         original simple HTML syntax away.
      </p>
      <p>
         If your web pages doesn't look the way you expected, try using the <a href="http://validator.w3.org/">Validation Service</a>.  If you have errors
         in it, this will tell you what they are.  The most common errors are
         unclosed environments (such as <tt>&lt;blockquote&gt;</tt> without a
         matching <tt>&lt;/blockquote&gt;</tt>) and  missing doublequotes inside
         commands, e.g.:
      </p>
      <p></p>
      <blockquote>
         <pre>&lt;a href="http://www.columbia.edu/kermit&gt;
</pre>
      </blockquote>
      which must be:
      <p></p>
      <blockquote>
         <pre>&lt;a href="http://www.columbia.edu/kermit"&gt;
</pre>
      </blockquote>
      <p>
         For more about "special characters" and character sets, see:
      </p>
      <p></p>
      <ul>
         <li><a href="http://www.columbia.edu/~fdc/entities.html">HTML 4 Symbolic Character Entities</a></li>
         <li>A <a href="http://www.columbia.edu/kermit/utf8-t1.html">Unicode 4.0 Table
            </a> (all but Chinese, Japanese, and Korean)
         </li>
         <li>More <a href="http://www.columbia.edu/kermit/csettables.html">character
            set tables</a>
         </li>
         <li>A <a href="http://www.columbia.edu/kermit/utf8.html">UTF-8 sampler</a>
            (text in many languages)
         </li>
         <li><a href="http://www.unicode.org/charts/">Unicode Character Charts</a>
            (official)
         </li>
      </ul>
      <p>
         <i>(End)</i>
      </p>
      <hr />
      <!-- close the <body> begun above -->
      <!-- close the <html> begun above -->
   </body>
</html>