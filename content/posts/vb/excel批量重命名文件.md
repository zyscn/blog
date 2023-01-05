---

title: "excel批量重命名文件"
date: 2023-01-05T00:00:00+08:00
lastmod: 2023-01-05T00:00:00+08:00
draft: false
tags: ["办公","excel" ]
categories: ["excel"]
author: "zyscn"

---

```vb
Function IsFileExists(ByVal strFileName As String) As Boolean
    If Dir(strFileName, 16) <> Empty Then
        IsFileExists = True
    Else
        IsFileExists = False
    End If
End Function

Sub Macro1()
    i = 1
    Do While i < 73
    Path = "C:\Users\xinxi\Desktop\pdf\"
    Newname = Path & Range("B" & i) & Range("A" & i) & ".pdf"
    Oldname = Path & Range("A" & i) & ".pdf"
    If IsFileExists(Oldname) = True Then
        Name Oldname As Newname
    End If
    i = i + 1
    Loop
End Sub

```