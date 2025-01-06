// 监听响应
if ($response.body) {
    // 输出原始响应 body
    console.log("Original Response Body:", $response.body);

    // 将 body 转换为 JSON 格式
    let responseBody = JSON.parse($response.body);

    // 输出解析后的 JSON 数据
    console.log("Parsed Response Body:", responseBody);

    // 检查并修改 eligible 和 group 字段
    if (typeof responseBody.eligible === 'boolean') {
        responseBody.eligible = true;
        console.log("Updated eligible:", responseBody.eligible);
    }
    if (typeof responseBody.group === 'string') {
        responseBody.group = 'ELIGIBLE';
        console.log("Updated group:", responseBody.group);
    }

    // 将修改后的 body 转回 JSON 字符串
    $response.body = JSON.stringify(responseBody);

    // 输出修改后的响应 body
    console.log("Modified Response Body:", $response.body);
}

// 结束脚本，应用修改
$done({ body: $response.body });
