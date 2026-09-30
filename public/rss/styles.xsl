<?xml version="1.0" encoding="UTF-8"?>
<!--
  Deixa o /rss.xml legível quando aberto no navegador (o leitor de RSS ignora
  esta folha). Cores da paleta Flexoki do blog.
-->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>RSS · <xsl:value-of select="/rss/channel/title" /></title>
        <style>
          :root { color-scheme: light dark; }
          body {
            max-width: 44rem; margin: 0 auto; padding: 2.5rem 1rem;
            font: 1.0625rem/1.6 system-ui, sans-serif;
            color: light-dark(#100f0f, #cecdc3);
            background: light-dark(#fffcf0, #100f0f);
          }
          .aviso {
            padding: 1rem 1.25rem; border-radius: 0.75rem;
            background: light-dark(#dad8ce, #343331);
          }
          code { font-size: 0.9em; }
          h1 { margin-block: 2rem 0.25rem; font-size: 2rem; }
          .descricao, time { color: light-dark(#6f6e69, #878580); }
          ul { list-style: none; padding: 0; }
          li { padding-block: 1rem; border-top: 1px solid light-dark(#dad8ce, #343331); }
          li a { color: inherit; font-weight: 600; font-size: 1.125rem; }
          time { display: block; font-size: 0.9rem; }
        </style>
      </head>
      <body>
        <p class="aviso">
          Este é o <strong>feed RSS</strong> do blog. Copie o endereço desta página
          (<code><xsl:value-of select="/rss/channel/atom:link/@href" xmlns:atom="http://www.w3.org/2005/Atom" /></code>)
          no seu leitor de RSS para receber os posts novos.
        </p>
        <h1><xsl:value-of select="/rss/channel/title" /></h1>
        <p class="descricao"><xsl:value-of select="/rss/channel/description" /></p>
        <p><a href="{/rss/channel/link}">← Voltar para o blog</a></p>
        <ul>
          <xsl:for-each select="/rss/channel/item">
            <li>
              <a href="{link}"><xsl:value-of select="title" /></a>
              <time><xsl:call-template name="data"><xsl:with-param name="d" select="pubDate" /></xsl:call-template></time>
              <p class="descricao"><xsl:value-of select="description" /></p>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>

  <!-- "Sun, 20 Sep 2026 00:00:00 GMT" → "20 de setembro de 2026" -->
  <xsl:template name="data">
    <xsl:param name="d" />
    <xsl:variable name="m" select="substring($d, 9, 3)" />
    <xsl:value-of select="number(substring($d, 6, 2))" />
    <xsl:text> de </xsl:text>
    <xsl:choose>
      <xsl:when test="$m = 'Jan'">janeiro</xsl:when>
      <xsl:when test="$m = 'Feb'">fevereiro</xsl:when>
      <xsl:when test="$m = 'Mar'">março</xsl:when>
      <xsl:when test="$m = 'Apr'">abril</xsl:when>
      <xsl:when test="$m = 'May'">maio</xsl:when>
      <xsl:when test="$m = 'Jun'">junho</xsl:when>
      <xsl:when test="$m = 'Jul'">julho</xsl:when>
      <xsl:when test="$m = 'Aug'">agosto</xsl:when>
      <xsl:when test="$m = 'Sep'">setembro</xsl:when>
      <xsl:when test="$m = 'Oct'">outubro</xsl:when>
      <xsl:when test="$m = 'Nov'">novembro</xsl:when>
      <xsl:otherwise>dezembro</xsl:otherwise>
    </xsl:choose>
    <xsl:text> de </xsl:text>
    <xsl:value-of select="substring($d, 13, 4)" />
  </xsl:template>
</xsl:stylesheet>
