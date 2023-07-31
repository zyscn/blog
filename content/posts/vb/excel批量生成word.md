---

title: "excel批量生成word"
summary: "根据excel表格数据和word模板批量生成相同模板word"
date: 2023-01-04T00:00:00+08:00
lastmod: 2023-01-04T00:00:00+08:00
draft: false
tags: ["办公","excel" ]
categories: ["excel"]
author: "zyscn"
---

```vba
Sub Macro()
    i = 1
    mypath = "C:\Users\xinxi\Desktop\123\"     '文件路径
    Do While i < 73      '循环次数，需替换的文本行数
    Newname = Range("A" & i) & ".docx"       '给新生成的表起个名称
    FileCopy mypath & "申请表.docx", mypath & Newname '复制模板文件
    Set docApp = CreateObject("Word.Application")
    With docApp
            .Visible = False
            .Documents.Open mypath & Newname  '打开我们复制的新文件进行模板文字替换
            Do While .Selection.Find.Execute("门店名称")
            .Selection.Text = Range("A" & i).Text '替换字符串
            .Selection.HomeKey Unit:=6
            Loop
            Do While .Selection.Find.Execute("门店社会信用代码")
            .Selection.Text = Range("B" & i).Text '替换字符串
            .Selection.HomeKey Unit:=6
            Loop
            Do While .Selection.Find.Execute("门店电话")
            .Selection.Text = Range("C" & i).Text '替换字符串
            .Selection.HomeKey Unit:=6
            Loop
            Do While .Selection.Find.Execute("门店地址")
            .Selection.Text = Range("E" & i).Text '替换字符串
            .Selection.HomeKey Unit:=6
            Loop
        .Documents.Save
        .Quit
    End With
    i = i + 1
    Loop
End Sub
```