<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
<xsl:output method="html" indent="yes" encoding="utf-8" />
<xsl:template match="search">
<form action="{@action}" className="search">
      <input type="search" placeholder="платье бальное" className="search__query" value="{@value}" />
      <input type="submit" value="Найти" className="search__submit" />
</form>
</xsl:template>
</xsl:stylesheet>
