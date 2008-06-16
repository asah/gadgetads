function dummy() {
  var string = '=======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
  =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
  =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
  =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
  =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
  =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
  =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
  =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
  =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
  =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
  =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
  =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
  =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
  =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
  =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
  =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
  =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
  =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
    =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns3="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns3:useragent>
    <ns4:developerToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns4="https://adwords.google.com/api/adwords/v11">XXXXXXX</ns4:developerToken>
    <ns5:applicationToken soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns5="https://adwords.google.com/api/adwords/v11">XXXXXX</ns5:applicationToken>
    <ns6:clientEmail soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns6="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns6:clientEmail>
   </soapenv:Header>
   <soapenv:Body>
    <validateReportJob xmlns="https://adwords.google.com/api/adwords/v11">
     <job xsi:type="ns7:DefinedReportJob" xmlns:ns7="https://adwords.google.com/api/adwords/v11">
      <crossClient xsi:type="xsd:boolean">false</crossClient>
      <endDay xsi:type="xsd:date">2008-03-12</endDay>
      <name xsi:type="xsd:string">Client Ad Report</name>
      <startDay xsi:type="xsd:date">2008-03-12</startDay>
      <aggregationTypes xsi:type="xsd:string">Daily</aggregationTypes>
      <campaigns xsi:type="xsd:int">19708594</campaigns>
      <campaigns xsi:type="xsd:int">21323914</campaigns>
      <campaigns xsi:type="xsd:int">21244294</campaigns>
      <includeZeroImpression xsi:type="xsd:boolean">false</includeZeroImpression>
      <selectedColumns xsi:type="xsd:string">AdGroupId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">AveragePosition</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CampaignId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Clicks</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Cost</selectedColumns>
      <selectedColumns xsi:type="xsd:string">CreativeId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">DestinationURL</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Impressions</selectedColumns>
      <selectedColumns xsi:type="xsd:string">Keyword</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordId</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordMinCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordStatus</selectedColumns>
      <selectedColumns xsi:type="xsd:string">KeywordTypeDisplay</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPC</selectedColumns>
      <selectedColumns xsi:type="xsd:string">MaximumCPM</selectedColumns>
      <selectedReportType xsi:type="xsd:string">Creative</selectedReportType>
     </job>
    </validateReportJob>
   </soapenv:Body>
  </soapenv:Envelope>
  = Out message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <responseTime soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">385</responseTime>
    <operations soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</operations>
    <units soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">1</units>
    <requestId soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns="https://adwords.google.com/api/adwords/v11">f6d7072ff9ce61c18d01d124782ffd29</requestId>
   </soapenv:Header>
   <soapenv:Body>
    <soapenv:Fault>
       <faultcode>soapenv:Server.userException</faultcode>

       <faultstring>One or more report job parameters is invalid.</faultstring>

       <detail>
        <ns1:fault xmlns:ns1="https://adwords.google.com/api/adwords/v11">
         <ns1:code>30</ns1:code>

         <ns1:message>One or more report job parameters is invalid.</ns1:message>

         <ns1:trigger> The following columns are not supported by the Report Type Creative : [MaximumCPM]</ns1:trigger>

      </ns1:fault>

     </detail>

    </soapenv:Fault>
   </soapenv:Body>
  </soapenv:Envelope>
  =======================================================
      =======================================================
  = Elapsed: 2309 milliseconds
  = In message: <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
    <ns1:email soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns1="https://adwords.google.com/api/adwords/v11">XXXXX@XXXXX.com</ns1:email>
    <ns2:password soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0" xmlns:ns2="https://adwords.google.com/api/adwords/v11">XXXXXXXX</ns2:password>
    <ns3:useragent soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnder
  ';
}