<?xml version="1.0" encoding="UTF-8"?>

<Values version="2.0">
  <value name="name">calculateDateDifference</value>
  <array name="sig" type="value" depth="1">
    <value>[i] field:0:required startDateTime</value>
    <value>[i] field:0:required endDateTime</value>
    <value>[i] field:0:required startDateFormat</value>
    <value>[i] field:0:required endDateFormat</value>
    <value>[o] field:0:required dateDifferenceSec</value>
    <value>[o] field:0:required dateDifferenceMin</value>
    <value>[o] field:0:required dateDifferenceHr</value>
    <value>[o] field:0:required dateDifferenceDay</value>
  </array>
  <value name="sigtype">java 3.5</value>
  <value name="encodeutf8">true</value>
  <value name="body">Ci8vIHBpcGVsaW5lCklEYXRhQ3Vyc29yIHBpcGVsaW5lQ3Vyc29yID0gcGlwZWxpbmUuZ2V0Q3Vy
c29yKCk7ClN0cmluZyBzdGFydERhdGVUaW1lID0gIiI7ClN0cmluZyBlbmREYXRlVGltZSA9ICIi
OwpTdHJpbmcgc3RhcnREYXRlRm9ybWF0ID0gIiI7ClN0cmluZyBlbmREYXRlRm9ybWF0ID0gIiI7
CmlmIChwaXBlbGluZUN1cnNvci5maXJzdCgic3RhcnREYXRlVGltZSIpKQp7CiAgc3RhcnREYXRl
VGltZSA9IChTdHJpbmcpIHBpcGVsaW5lQ3Vyc29yLmdldFZhbHVlKCk7Cn0KaWYgKHBpcGVsaW5l
Q3Vyc29yLmZpcnN0KCJlbmREYXRlVGltZSIpKQp7CiAgZW5kRGF0ZVRpbWUgPSAoU3RyaW5nKSBw
aXBlbGluZUN1cnNvci5nZXRWYWx1ZSgpOwp9CmlmIChwaXBlbGluZUN1cnNvci5maXJzdCgic3Rh
cnREYXRlRm9ybWF0IikpCnsKICBzdGFydERhdGVGb3JtYXQgPSAoU3RyaW5nKSBwaXBlbGluZUN1
cnNvci5nZXRWYWx1ZSgpOwp9CmlmIChwaXBlbGluZUN1cnNvci5maXJzdCgiZW5kRGF0ZUZvcm1h
dCIpKQp7CiAgZW5kRGF0ZUZvcm1hdCA9IChTdHJpbmcpIHBpcGVsaW5lQ3Vyc29yLmdldFZhbHVl
KCk7Cn0KCmlmIChzdGFydERhdGVUaW1lLmVxdWFscygiIikgfHwgZW5kRGF0ZVRpbWUuZXF1YWxz
KCIiKSkKICB0aHJvdyBuZXcgU2VydmljZUV4Y2VwdGlvbigiRGF0ZXMgY2Fubm90IGJlIG51bGwi
KTsKaWYgKHN0YXJ0RGF0ZUZvcm1hdC5lcXVhbHMoIiIpIHx8IGVuZERhdGVGb3JtYXQuZXF1YWxz
KCIiKSkKICB0aHJvdyBuZXcgU2VydmljZUV4Y2VwdGlvbigiRGF0ZSBmb3JtYXRzIGNhbm5vdCBi
ZSBudWxsIik7CgpwaXBlbGluZUN1cnNvci5kZXN0cm95KCk7Cgp0cnkKewogIFNpbXBsZURhdGVG
b3JtYXQgc2RmID0gbmV3IFNpbXBsZURhdGVGb3JtYXQoc3RhcnREYXRlRm9ybWF0KTsKICBEYXRl
IHNkdCA9IHNkZi5wYXJzZShzdGFydERhdGVUaW1lKTsKICBTaW1wbGVEYXRlRm9ybWF0IGVkZiA9
IG5ldyBTaW1wbGVEYXRlRm9ybWF0KGVuZERhdGVGb3JtYXQpOwogIERhdGUgZWR0ID0gZWRmLnBh
cnNlKGVuZERhdGVUaW1lKTsKICBsb25nIHRpbWVkaWZmID0gZWR0LmdldFRpbWUoKSAtIHNkdC5n
ZXRUaW1lKCk7CgogIC8vIFNpbXBsZURhdGVGb3JtYXQgc3NkZiA9IG5ldyBTaW1wbGVEYXRlRm9y
bWF0KCJISDptbTpzcyIpOwogIC8vIENhbGVuZGFyIGNhbCA9IENhbGVuZGFyLmdldEluc3RhbmNl
KCk7CiAgLy8gY2FsLmNsZWFyKCk7CiAgLy8gY2FsLnNldChDYWxlbmRhci5TRUNPTkQsIChpbnQp
IHRpbWVkaWZmIC8xMDAwKTsKCiAgLy8gRGF0ZSBuZXdEYXRlVGltZSA9IGNhbC5nZXRUaW1lKCk7
CiAgLy8gU3RyaW5nIGRpc3BsYXlUaW1lPW51bGw7CgogIC8vIGlmIChjYWwuZ2V0KENhbGVuZGFy
LkRBWV9PRl9ZRUFSKSA+IDEgKQogIC8vIGRpc3BsYXlUaW1lID0gc3NkZi5mb3JtYXQobmV3RGF0
ZVRpbWUpICsgIiBhbmQgIiArCiAgLy8gKGNhbC5nZXQoQ2FsZW5kYXIuREFZX09GX1lFQVIpLTEp
ICsgIiBEYXkocykiIDsKICAvLyBlbHNlCiAgLy8gZGlzcGxheVRpbWUgPSBzc2RmLmZvcm1hdChu
ZXdEYXRlVGltZSk7CgogIFN0cmluZyBkaXNwbGF5VGltZVNlYyA9IExvbmcudG9TdHJpbmcodGlt
ZWRpZmYgLyAxMDAwKTsKICBTdHJpbmcgZGlzcGxheVRpbWVNaW4gPSBMb25nLnRvU3RyaW5nKHRp
bWVkaWZmIC8gNjAwMDApOwogIFN0cmluZyBkaXNwbGF5VGltZUhyID0gTG9uZy50b1N0cmluZyh0
aW1lZGlmZiAvIDM2MDAwMDApOwogIFN0cmluZyBkaXNwbGF5VGltZURheSA9IExvbmcudG9TdHJp
bmcodGltZWRpZmYgLyA4NjQwMDAwMCk7CgogIC8vIHBpcGVsaW5lCiAgSURhdGFDdXJzb3IgcGlw
ZWxpbmVDdXJzb3JfMSA9IHBpcGVsaW5lLmdldEN1cnNvcigpOwogIHBpcGVsaW5lQ3Vyc29yXzEu
bGFzdCgpOwogIHBpcGVsaW5lQ3Vyc29yXzEuaW5zZXJ0QWZ0ZXIoImRhdGVEaWZmZXJlbmNlU2Vj
IiwgZGlzcGxheVRpbWVTZWMpOwogIHBpcGVsaW5lQ3Vyc29yXzEuaW5zZXJ0QWZ0ZXIoImRhdGVE
aWZmZXJlbmNlTWluIiwgZGlzcGxheVRpbWVNaW4pOwogIHBpcGVsaW5lQ3Vyc29yXzEuaW5zZXJ0
QWZ0ZXIoImRhdGVEaWZmZXJlbmNlSHIiLCBkaXNwbGF5VGltZUhyKTsKICBwaXBlbGluZUN1cnNv
cl8xLmluc2VydEFmdGVyKCJkYXRlRGlmZmVyZW5jZURheSIsIGRpc3BsYXlUaW1lRGF5KTsKICBw
aXBlbGluZUN1cnNvcl8xLmRlc3Ryb3koKTsKfQpjYXRjaCAoUGFyc2VFeGNlcHRpb24gZSkKewog
IHRocm93IG5ldyBTZXJ2aWNlRXhjZXB0aW9uKCJFcnJvciBwYXJzaW5nIHRoZSBkYXRlIHRpbWU6
ICIgKyBlKTsKfQo=</value>
</Values>
