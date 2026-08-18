# 海外 B2B 社媒运营基础设施搭建指南 v1.3（整理版）

> **适用对象：** 中国出口制造企业、外贸团队、B2B 企业海外市场团队  
> **适用平台：** LinkedIn、Facebook、Instagram、YouTube、TikTok、WhatsApp 等  
> **目标：** 建立一套稳定、简单、低维护、可交接、企业可控的海外社媒运营基础设施，使品牌官方账号与 Sales 个人账号能够长期稳定运营。

---

## 1. 这套基础设施要解决什么问题？

海外 B2B 社媒运营不是简单地注册几个账号然后开始发帖。

随着运营时间增加，以下内容都会逐渐成为企业数字资产：

- LinkedIn Company Page；
- Facebook Page；
- Instagram 品牌账号；
- YouTube Channel；
- TikTok 品牌账号；
- Sales 的 LinkedIn Personal Profile；
- WhatsApp 商务号码；
- 企业邮箱；
- 客户聊天记录；
- 内容与素材；
- 登录凭证；
- 2FA；
- Recovery Codes；
- 企业后台权限；
- 客户关系和历史互动数据。

如果前期没有规划，很容易出现：

- 品牌账号散落在员工个人电脑中；
- 不同员工使用不同 VPN 和不同国家节点；
- 多人共享品牌账号密码；
- Sales 不知道应该用电脑还是手机运营；
- 每个人都被要求配置 Proxy、指纹浏览器和复杂网络环境；
- 员工离职以后账号和客户资源难以交接；
- 海外 SIM 卡失效后无法恢复账号；
- 公司不知道哪些账号、号码和权限真正属于企业。

因此，这套基础设施的目标不是：

> **把社媒运营变得更复杂。**

而是：

> **尽可能减少复杂配置，同时保证网络稳定、账号安全、资产可控和人员可交接。**

---

## 2. 总体架构：Brand 与 Sales 分开

整个海外社媒体系分为两套环境。

### 2.1 Brand Environment

负责企业官方品牌资产：

- LinkedIn Company Page；
- Facebook Page；
- Instagram Brand Account；
- YouTube Channel；
- TikTok Brand Account；
- Meta Business Portfolio；
- 品牌内容；
- 企业账号安全与权限管理。

核心原则：

> **品牌资产集中管理。**

### 2.2 Sales Environment

负责每位 Sales 自己的真实业务身份：

- LinkedIn Personal Profile；
- Email；
- CRM；
- WhatsApp；
- 客户研究；
- 客户沟通；
- Sales 个人专业内容发布。

核心原则：

> **Sales 使用自己的真实身份和固定工作设备。**

最终可以概括成一句话：

> **品牌账号集中管理，Sales 个人账号分散运营；内容策略统一，发布环境分开。**

---

## 3. 官方品牌账号应该有多少个？

对于 ARMOR 这样的单一 B2B 品牌，现阶段原则很简单：

> **每个平台原则上只维护一个官方品牌资产。**

| 平台      | 官方品牌资产                         |
| --------- | ------------------------------------ |
| LinkedIn  | 1 个 Company Page                    |
| Facebook  | 1 个 Page                            |
| Instagram | 1 个 Brand Account                   |
| YouTube   | 1 个 Channel                         |
| TikTok    | 1 个 Brand Account                   |
| WhatsApp  | 1 个公司主号 + 按需要配置 Sales 号码 |

现阶段不建议建立：

```text
Instagram
├── ARMOR Official
├── ARMOR Lighting
├── ARMOR Retail
├── ARMOR Export
└── ARMOR Factory
```

除非未来真正出现：

- 独立品牌；
- 独立国家公司；
- 完全不同的业务线；
- 有明确的独立运营团队。

否则，多账号只会增加：

- 粉丝和内容权重分散；
- 密码与权限数量；
- 运营成本；
- 交接难度。

---

## 4. Brand Environment

完整的 Brand Environment 不应该只是一台电脑，而应该由以下部分共同组成：

```text
ARMOR Brand Environment
│
├── Brand Publishing Workstation
├── Brand Social Phone
├── Corporate Overseas SIM
├── Stable Network
├── Corporate Email
├── Password Manager
├── Authenticator / Passkey
├── Recovery Codes
└── Platform Admin Permissions
```

其中两台固定设备承担不同职责：

```text
Brand Publishing Workstation
        +
Brand Social Phone
```

### 4.1 Brand Publishing Workstation

Brand Publishing Workstation 是：

> **品牌社媒专用发布与管理电脑。**

它只负责企业官方品牌环境，不负责集中代管 Sales 的个人账号。

主要职责：

- LinkedIn Company Page；
- Facebook Page；
- Instagram Brand Account；
- YouTube；
- TikTok Brand Account；
- Meta Business Portfolio；
- 品牌内容发布；
- 品牌素材管理；
- 企业账号安全设置；
- 企业后台权限管理；
- 企业邮箱；
- 密码管理；
- 平台后台管理。

推荐状态：

```text
固定电脑
+
固定系统用户
+
固定浏览器
+
固定 Browser Profile
+
长期保存 Cookie
+
固定网络
+
固定授权人员
```

不建议让它逐渐变成：

```text
品牌发布
+
普通办公
+
Sales 软件
+
个人账号
+
大量浏览器插件
+
各种临时 VPN
+
各种无关软件
```

它应该尽可能接近：

> **一台专用设备，而不是办公室公共电脑。**

### 4.2 Workstation 选择 Windows 还是 macOS？

两种系统都可以。

对于社媒平台来说，真正重要的不是：

> Windows 还是 macOS。

而是：

> **设备固定、浏览器固定、Profile 固定、网络稳定、授权人员固定。**

#### ARMOR 当前建议

ARMOR 当前阶段更推荐：

> **macOS。**

可以考虑：

- Mac mini；
- MacBook Air；
- 现有闲置且仍能获得安全更新的 Mac。

原因不是 macOS 能降低平台风控，而是 ARMOR 当前 Brand Workstation 数量很少，macOS 更容易保持简单、专用和低维护。

理想状态：

```text
Brand Publishing Workstation

macOS
+
固定系统用户
+
固定 Chrome Profile
+
企业密码管理器
+
企业云盘
+
固定网络
+
必要内容工具
```

如果未来企业形成完整的 Windows IT 管理体系，例如：

- 大量 Windows 工作站；
- Microsoft Entra / Active Directory；
- BitLocker；
- MDM；
- 企业统一软件部署；
- 专职 IT 人员；

那么 Windows 11 Pro 同样是合理选择。

因此：

> **macOS 是 ARMOR 当前阶段的推荐方案，而不是社媒运营的强制要求。**

### 4.3 Workstation 需要多高配置？

性能要求不高。

主要工作本质上是：

- 浏览器后台管理；
- 内容发布；
- 文件上传；
- 企业邮箱；
- 轻量图片与视频处理；
- Canva / Figma 等内容工具；
- 密码和账号安全管理。

重点不是性能，而是：

> **固定、专用、稳定、属于公司。**

### 4.4 Brand Social Phone

建议配置 1 台：

> **Brand Social Phone。**

它不是员工私人手机，也不是单纯用来收验证码的“短信机”。

主要职责：

- 安装官方社媒 App；
- 长期安装品牌海外 SIM；
- SMS / Voice；
- 登录确认；
- Authenticator；
- Passkey；
- 移动端平台功能；
- 紧急恢复；
- 必要的移动端发布与检查。

推荐状态：

```text
Brand Social Phone

固定手机
+
企业持有
+
品牌海外 SIM
+
官方社媒 App
+
Authenticator
+
Password Manager
+
固定管理人员
```

### 4.5 Brand Social Phone 可以登录社媒 App 吗？

可以。

可以正常安装和使用：

- LinkedIn；
- Facebook；
- Meta Business Suite；
- Instagram；
- TikTok；
- YouTube；
- Authenticator；
- 企业密码管理器。

关键不是禁止登录 App，而是：

> **不要把 Brand Social Phone 当成一台到处切换网络、VPN、设备角色和使用人员的普通手机。**

优先：

```text
Brand Social Phone
        ↓
公司固定 Wi-Fi
        ↓
Brand 固定网络出口
```

偶尔因业务需要使用 4G / 5G，并不意味着账号一定会有问题。

真正应该避免的是：

> **没有业务必要的频繁网络、国家、VPN 节点和设备切换。**

### 4.6 手机定位权限

Brand Social Phone 建议遵循：

> **最小权限原则。**

对于没有定位业务需要的社媒 App，可以关闭不必要的：

- Precise Location；
- Background Location；
- 后台位置访问。

这样做的目的是：

- 隐私；
- 安全；
- 减少不必要的数据暴露。

不要使用：

- GPS Spoofing；
- 虚假定位工具；
- 不断变化的 VPN 国家；
- 为了伪装账号而修改大量设备参数。

核心原则：

> **不追求伪装，只追求长期稳定、合理和可解释。**

### 4.7 Brand 环境需要指纹浏览器吗？

默认不需要。

ARMOR 当前是：

```text
1 个品牌
        ↓
每个平台 1 个官方账号
```

不是：

```text
几十个不同身份
+
几十个账号
+
多个国家
+
账号矩阵
```

因此，没有必要把以下工具作为标准基础设施：

- AdsPower；
- Hubstudio；
- BitBrowser；
- 其他指纹浏览器。

正常使用：

```text
固定电脑
+
Chrome / Edge / Safari
+
固定 Browser Profile
+
长期保存 Cookie
+
固定网络
```

即可。

只有未来真正出现以下场景时再考虑：

- 同一台电脑管理多个完全独立品牌；
- 多个互不相关账号需要环境隔离；
- 特殊测试账号；
- 多国家独立运营团队；
- 真正的账号矩阵业务。

结论：

> **指纹浏览器属于特殊场景可选工具，不属于 ARMOR 当前标准基础设施。**

---

## 5. Sales Environment

Sales 和品牌官方账号是两套不同环境。

如果 Sales 使用：

> **本人真实身份 + 本人唯一 LinkedIn Personal Profile**

那么就不应该把每个人都做成复杂的“账号环境”。

### 5.1 Sales 标准配置

```text
Sales
│
├── 固定工作电脑
├── 正常浏览器
├── 固定 Browser Profile
├── 公司统一海外网络
├── 固定工作手机
├── 真实 LinkedIn Personal Profile
├── 企业邮箱
├── CRM
└── WhatsApp
```

| 项目            | 推荐                      |
| --------------- | ------------------------- |
| 工作电脑        | 公司配发或长期固定使用    |
| 浏览器          | Chrome / Edge / Safari    |
| Browser Profile | 每人一个固定 Profile      |
| LinkedIn        | 本人真实 Personal Profile |
| 企业邮箱        | 每人一个                  |
| CRM             | 公司统一系统              |
| 工作手机        | 每人固定                  |
| WhatsApp        | 每人自己的商务号码        |
| 2FA             | 核心账号开启              |
| 网络            | 香港固定企业出口          |
| 住宅 IP         | 不要求一人一个            |
| 指纹浏览器      | 默认不需要                |

### 5.2 Sales 应该用电脑还是手机？

不是二选一。

推荐：

> **电脑为主，手机为辅。**

工作电脑主要负责：

- LinkedIn 客户开发；
- Sales Navigator；
- 搜索客户；
- 查看公司资料；
- 发布 LinkedIn 个人动态；
- 评论；
- 私信；
- Email；
- CRM；
- 内容编辑。

工作手机主要负责：

- LinkedIn App；
- WhatsApp；
- 消息通知；
- 快速回复；
- 移动端互动；
- 登录确认；
- 2FA。

### 5.3 Sales 的个人内容在哪里发布？

Sales Personal 内容由本人在自己的设备发布。

```text
ARMOR Brand
        ↓
Brand Publishing Workstation
        ↓
LinkedIn Company Page


Sales A
        ↓
Sales A 工作电脑 / 工作手机
        ↓
Sales A LinkedIn Personal


Sales B
        ↓
Sales B 工作电脑 / 工作手机
        ↓
Sales B LinkedIn Personal
```

不要使用 Brand Publishing Workstation 集中代发所有 Sales 的 Personal 内容。

原因很简单：

> **Personal Profile 代表真实个人。**

### 5.4 Sales 需要指纹浏览器吗？

默认不需要。

如果是：

- 一个真人；
- 一个 LinkedIn 账号；
- 一个固定电脑；
- 一个固定手机；
- 一个真实公司身份；

那么直接正常使用即可。

原则：

> **没有真实隔离需求，就不要增加隔离工具。**

---

## 6. Network & IP

网络设计的核心不是“伪装”，而是：

> **稳定、简单、长期可维护。**

### 6.1 Brand 网络

Brand Publishing Workstation 建议长期使用一个稳定出口。

例如：

```text
Brand Environment
        ↓
固定稳定海外出口
        ↓
长期保持
```

可根据企业实际网络条件选择：

- Static Residential；
- ISP Proxy；
- 固定企业网络；
- 其他长期稳定出口。

重点不是：

> 一定必须使用某个国家的住宅 IP。

而是：

> **确定之后长期稳定使用。**

避免：

```text
今天美国
明天英国
后天香港
下周日本
```

### 6.2 Sales 网络

ARMOR 位于广州。

Sales 团队如果需要统一海外网络出口，可以优先考虑：

> **香港固定企业出口。**

主要理由：

- 地理距离近；
- 网络延迟通常较低；
- 华南企业使用香港跨境网络出口逻辑自然；
- 网络维护方便；
- 不需要每人购买独立美国住宅 IP；
- 后续员工培训简单。

推荐：

```text
ARMOR 广州办公室
        ↓
香港固定企业出口
        │
        ├── Sales A
        ├── Sales B
        ├── Sales C
        ├── Sales D
        └── Sales E
```

### 6.3 Sales 需要一人一个 IP 吗？

不需要。

5 个 Sales 本来就是同一家企业、同一办公室的真实员工，共享一个企业公网出口属于正常企业网络架构。

没有必要做成：

```text
Sales A → 美国住宅 IP 01
Sales B → 美国住宅 IP 02
Sales C → 美国住宅 IP 03
Sales D → 美国住宅 IP 04
Sales E → 美国住宅 IP 05
```

后者只会增加：

- 成本；
- Proxy 维护；
- 故障率；
- 员工操作难度。

### 6.4 Brand 和 Sales 必须使用同一个国家的 IP 吗？

不需要。

例如：

```text
Brand
→ 固定稳定海外出口

Sales
→ 香港固定企业出口
```

没有逻辑冲突。

真正重要的是：

> **每个账号自身的长期使用环境保持合理和稳定。**

### 6.5 电脑和手机必须同一个 IP 吗？

不需要。

真实企业用户完全可能：

```text
工作电脑
→ 公司 Wi-Fi

工作手机
→ 公司 Wi-Fi / 4G / 5G
```

对于固定 Brand Environment，可以优先让 Brand Social Phone 使用与 Workstation 相同的公司 Wi-Fi，以减少网络环境复杂度。

但不需要人为追求：

> 电脑和手机必须拥有完全相同的公网 IP。

应该避免的是没有业务必要的频繁跨国切换，例如：

```text
Workstation → 美国
5 分钟后
Phone → 中国大陆临时移动网络
10 分钟后
Workstation → 英国 VPN
30 分钟后
Phone → 日本节点
```

核心原则：

> **稳定优先，而不是 IP 强行一致。**

### 6.6 VPS VPN 可以用吗？

可以，但需要区分场景。

作为稳定企业出口，例如：

```text
ARMOR Office
        ↓
WireGuard
        ↓
香港 VPS
        ↓
固定公网 IP
        ↓
Sales Team
```

可以考虑。

不推荐：

```text
共享机场
+
很多用户
+
每天换节点
+
不同国家来回跳
```

这种网络最大的问题是：

> **长期不稳定。**

### 6.7 住宅 IP 的正确定位

住宅 IP 不作为 Sales 的标准配置。

更适合：

- Brand 官方固定发布环境；
- 确实存在特殊网络需求的环境。

结论：

```text
Brand
→ 固定稳定出口

Sales Team
→ 香港稳定企业出口
```

---

## 7. Corporate Overseas SIM & Phone Number

海外手机号不应该被理解成：

> **注册时收一下验证码。**

它可能长期绑定：

- WhatsApp；
- LinkedIn；
- Facebook；
- Google；
- Microsoft；
- SaaS；
- 2FA；
- 账号恢复；
- 多年积累的数字资产。

因此：

> **海外号码本身属于企业数字身份基础设施。**

### 7.1 品牌海外 SIM 放在哪里？

品牌核心海外 SIM 建议长期安装在：

> **Brand Social Phone。**

不要长期在不同员工私人手机之间移动。

```text
Corporate Overseas SIM
        ↓
Brand Social Phone
        ↓
SMS
Voice
Verification
Recovery
```

SIM、手机和号码都应建立企业资产记录：

```text
号码
运营商
套餐
实名主体
激活日期
续费日期
PIN / PUK
账户后台
Recovery Email
负责人
备用恢复方式
绑定的平台与账号
```

### 7.2 号码选择原则

不要首先问：

> 哪张卡最便宜？

应按以下顺序判断：

1. **长期持有能力**：能不能长期保号？
2. **验证码能力**：核心平台短信是否可靠？
3. **漫游政策**：是否限制长期境外使用？
4. **激活要求**：是否必须当地激活？
5. **实名要求**：企业或中国身份能否完成？
6. **客户认知**：号码地区是否与市场匹配？
7. **成本**：最后再比较长期费用。

### 7.3 地区选择

| 地区     | 定位                       |
| -------- | -------------------------- |
| 香港     | 大陆企业重点候选           |
| 美国     | 欧美业务重要候选           |
| 格鲁吉亚 | 低成本备用候选             |
| 爱沙尼亚 | 辅助验证候选               |
| 德国     | 特定欧洲市场               |
| 英国     | 不建议作为默认唯一核心方案 |
| 新马泰   | 更偏短期或特定业务         |
| 菲律宾   | 备用方案为主               |

实际采购前：

> **必须再次检查当期运营商的激活、实名、漫游、保号和验证码政策。**

#### 香港号码

对广州团队的优势：

- 获取和管理方便；
- 地理距离近；
- 中文服务；
- 漫游场景自然；
- 保号成本通常较低。

原文关注过的方案包括：

- Club Sim；
- hahaSIM；
- 3HK；
- 中国联通香港等。

适合：

- 亚洲业务；
- Sales WhatsApp；
- 企业备用号码；
- 验证号码。

#### 美国号码

适合：

- 欧美业务；
- 国际商务；
- WhatsApp；
- SaaS；
- 核心验证。

原文关注过的方案包括：

- Ultra Mobile PayGo；
- T-Mobile；
- Tello；
- Saily；
- Red Pocket。

但不能假设：

> 买到以后永久不会失效。

长期境外使用始终需要关注运营商政策变化。

#### 英国号码

英国号码过去因为获取方便、Prepaid 丰富、国际接受度较好而常被使用。

但长期境外漫游可能存在：

- 服务限制；
- 激活要求；
- 政策变化。

因此：

> **不应作为企业唯一核心号码。**

### 7.4 海外手机号如何参与账号注册？

不要默认：

```text
海外手机号
=
平台主身份
```

更推荐：

```text
企业邮箱
=
Primary Identity

海外手机号
=
Verification / Recovery

Authenticator / Passkey
=
2FA

Recovery Codes
=
Emergency Recovery
```

即：

```text
企业邮箱
        ↓
创建品牌账号
        ↓
绑定企业海外号码
        ↓
开启 Authenticator / Passkey
        ↓
保存 Recovery Codes
        ↓
进入企业密码管理体系
```

原则：

> **海外手机号非常重要，但不能成为企业账号唯一的钥匙。**

### 7.5 海外 SIM 是否应该开启移动数据？

海外 SIM 的核心价值首先是：

- 长期号码持有；
- SMS；
- Voice；
- Verification；
- Recovery；
- WhatsApp 等需要电话号码的业务。

如果 Brand Social Phone 已经有稳定公司 Wi-Fi：

> **日常社媒运营优先使用固定企业 Wi-Fi。**

没有必要为了使用海外 SIM 而刻意让所有社媒流量经过国际漫游数据。

也不需要绝对禁止移动数据。

原则仍然是：

> **能稳定就不要频繁切换，能简单就不要人为增加变量。**

---

## 8. Identity, Security & Recovery

企业账号安全不能依赖一张 SIM、一台手机或某一个员工。

### 8.1 推荐安全层

```text
Corporate Identity Layer
│
├── Corporate Email
├── Corporate Overseas Number
├── Password Manager
├── Authenticator / Passkey
├── Recovery Codes
├── Backup Admin
└── Backup Recovery Method
```

### 8.2 Authenticator / Passkey

所有核心账号应尽量开启平台支持的额外验证方式，例如：

- Authenticator；
- Passkey；
- 其他平台支持的强验证方式。

这样即使 SIM 临时不能接收短信，仍存在其他验证路径。

### 8.3 Recovery Codes

所有支持 Recovery Codes 的平台，都应该把恢复代码保存到：

> **企业密码管理系统。**

不要只：

- 截图；
- 放在员工手机；
- 存在某个人电脑桌面。

### 8.4 企业密码管理

企业应该建立统一密码管理系统，用于保存：

- 品牌账号；
- 企业邮箱；
- 关键 SaaS；
- Recovery Codes；
- 网络服务后台；
- Proxy / VPS 凭证；
- 域名；
- 重要管理账号。

### 8.5 不要让 SIM 成为单点故障

核心账号建议形成：

```text
企业邮箱
+
主号码
+
Brand Social Phone
+
Authenticator / Passkey
+
Recovery Codes
+
备用管理员
+
必要的备用号码
```

而不是：

```text
一张海外 SIM
=
所有品牌账号
=
全部恢复能力
```

手机本身也不能成为单点故障。

如果 Brand Social Phone 丢失或损坏，公司仍然应该可以通过：

- 企业邮箱；
- 企业密码管理器；
- Recovery Codes；
- 备用管理员；
- 备用号码；
- 平台官方恢复流程；

重新建立设备环境。

### 8.6 平台权限优先于共享密码

官方品牌资产应优先使用平台自己的权限体系。

例如 LinkedIn Company Page：

```text
Company Page
│
├── Super Admin
├── Content Admin
└── Analyst
```

Meta 则应通过：

> **Business Portfolio / Business Manager**

进行权限管理。

原则：

> **能分配权限，就不要多人共享一个品牌账号密码。**

### 8.7 Sales 个人账号密码

需要区分：

> 企业品牌资产

和：

> Sales 个人平台身份。

LinkedIn Personal Profile 是 Sales 本人的真实个人账号，不应该变成：

```text
Sales A LinkedIn 密码
        ↓
全公司所有人都知道
```

更合理的是：

- Sales 本人正常使用；
- 企业控制企业邮箱、工作设备和内部系统权限；
- Company Page 和其他官方资产使用平台权限体系管理。

---

## 9. Platform Account Structure

品牌账号不需要统一规定“全部在电脑注册”或者“全部在手机注册”。

更合理的是：

> **根据平台自身账号结构，在 Brand Environment 内完成注册。**

注册完成后，应确保：

> **账号、企业邮箱、号码、2FA、Recovery、管理员权限都进入企业资产体系。**

### 9.1 LinkedIn

LinkedIn Company Page 不是独立的“公司登录账号”。

正确结构：

```text
真实 LinkedIn Personal Profile
        ↓
LinkedIn Company Page
        ↓
Super Admin / Content Admin / Analyst
```

不要创建类似：

```text
First Name: ARMOR
Last Name: Lighting
```

这样的虚假 Personal Profile 作为公共品牌登录账号。

公司 Page 应由真实授权人员管理，并避免只有一个唯一管理员。

Brand Publishing Workstation：

- Company Page 日常管理；
- 品牌内容发布；
- 后台设置。

Brand Social Phone：

- LinkedIn App；
- 登录确认；
- 2FA；
- 必要移动管理。

### 9.2 Facebook

推荐结构：

```text
真实授权人员
        ↓
Meta Business Portfolio
        ↓
ARMOR Facebook Page
```

不要设计成：

```text
一个 Facebook 密码
+
整个公司一起登录
```

应通过 Meta 的权限体系分配人员权限。

### 9.3 Instagram

Instagram Brand Account 属于独立品牌账号资产。

建议：

```text
企业邮箱
+
品牌海外手机号
+
2FA
+
Recovery Codes
```

建立后纳入：

> **Meta Business Portfolio。**

Instagram App 可以长期登录在 Brand Social Phone。

日常内容生产和后台管理仍以 Brand Publishing Workstation 为主。

### 9.4 TikTok

TikTok Brand Account 可以在 Brand Environment 中完成初始化。

如果移动端注册流程更方便，可以使用：

```text
Brand Social Phone
+
TikTok App
+
企业邮箱
```

完成后：

- 绑定品牌海外手机号；
- 开启 2FA；
- 保存恢复方式；
- 配置企业品牌资料；
- 按业务需要设置 Business Account。

之后：

```text
Brand Publishing Workstation
+
Brand Social Phone
```

都可以成为固定品牌设备。

### 9.5 YouTube

建议以企业控制的 Google Account 为基础：

```text
企业 Google Account
        ↓
ARMOR YouTube Channel
        ↓
官方权限系统
        ↓
授权相关工作人员
```

Brand Publishing Workstation 主要负责：

- YouTube Studio；
- 视频上传；
- Channel 管理。

Brand Social Phone 主要用于：

- YouTube App；
- Google 登录确认；
- 2FA；
- 必要移动管理。

### 9.6 WhatsApp

WhatsApp 与普通社媒平台不同，因为手机号本身是重要身份标识。

应区分：

```text
品牌 / 企业主号码
```

和：

```text
Sales Personal Business Number
```

不能把所有 Sales 客户沟通都塞进 Brand Social Phone。

---

## 10. Content & Publishing Workflow

设备与网络只是基础设施。

内容生产仍然应该统一规划。

推荐流程：

```text
Topic
        ↓
Research
        ↓
Copy
        ↓
Visual
        ↓
Review
        ↓
Publish
        ↓
Measure
```

实际组织方式：

```text
市场内容中心
        │
        ├── Brand Content
        │       ↓
        │  Brand Publishing Workstation
        │       ↓
        │  Official Brand Accounts
        │
        └── Sales Content Pack
                ↓
              Sales
                ↓
         Personal Profiles
```

### 10.1 Brand Content

主要强调：

- 企业能力；
- 产品；
- 系统解决方案；
- 技术；
- 工程能力；
- 品牌观点。

由：

> **Brand Publishing Workstation**

发布。

### 10.2 Sales Content

主要强调：

- 个人经验；
- 客户问题；
- 项目观察；
- 行业观点；
- 客户沟通中的发现。

由：

> **Sales 本人**

发布。

### 10.3 不要让所有 Sales 复制同一篇帖子

公司可以统一提供：

> **Sales Content Pack**

包括：

- 主题；
- 产品图片；
- 客户痛点；
- 行业数据；
- 核心观点；
- 文案框架；
- CTA；
- Hashtags。

但 Sales 应从自己的专业视角重新表达。

例如同样推广 Power Track：

Brand 可以从：

> ARMOR 的 Power Track 如何帮助零售展示系统实现更灵活的供电结构。

切入。

Sales A 可以从：

> 客户经常遇到货架改造后重新布线的问题。

切入。

Sales B 可以从：

> Fixture manufacturers 为什么越来越关注 modular power distribution。

切入。

Sales C 可以从：

> 最近客户询价中最常问的安装和维护问题。

切入。

形成：

```text
一个主题
        ↓
Brand Authority
        +
Sales Human Expertise
```

而不是：

> 5 个 Sales 同一天复制完全相同的广告。

---

## 11. Employee Lifecycle & Business Continuity

### 11.1 员工离职

员工离职时，公司应该能够：

1. 回收工作电脑；
2. 回收工作手机；
3. 回收企业邮箱；
4. 取消 CRM 权限；
5. 删除 Meta 企业权限；
6. 删除 LinkedIn Company Page 权限；
7. 回收企业密码管理器权限；
8. 转移客户；
9. 取消其他 SaaS 权限。

品牌资产：

> **不跟员工一起离开。**

### 11.2 Brand Workstation 损坏

只要以下内容不依赖单机保存：

- 密码有企业备份；
- 2FA 有恢复方式；
- Recovery Codes 已保存；
- 网络配置有文档；
- 素材在企业云盘；

就可以重新部署。

### 11.3 Brand Social Phone 损坏

应该可以通过：

- 企业邮箱；
- 企业密码管理器；
- Recovery Codes；
- 备用管理员；
- 备用号码；
- 平台官方恢复流程；

重新建立移动端环境。

### 11.4 SIM 失效

SIM 失效不应该等于：

> 所有品牌账号失去恢复能力。

这也是为什么企业邮箱、Authenticator / Passkey、Recovery Codes 和备用管理员必须同时存在。

---

## 12. ARMOR 5 人 Sales 团队推荐配置

假设：

- Sales：5 人；
- 市场 / 社媒负责人：1 人。

推荐：

| 基础设施                     | 配置                 |
| ---------------------------- | -------------------- |
| Brand Publishing Workstation | 1 台                 |
| Brand Social Phone           | 1 台                 |
| Brand 官方账号               | 每个平台原则上 1 个  |
| Brand 核心海外号码           | 1 个长期号码         |
| Sales 工作电脑               | 每人 1 台            |
| Sales 工作手机               | 每人 1 台            |
| Brand 网络                   | 1 条固定稳定出口     |
| Sales 网络                   | 1 条香港固定企业出口 |
| 备用网络                     | 1 条                 |
| 企业邮箱                     | 每人 1 个            |
| Sales 海外号码               | 按业务角色配置       |
| 企业备用号码                 | 1–2 个               |
| 企业密码管理器               | 1 套                 |
| Authenticator / Passkey      | 核心账号开启         |
| Recovery Codes               | 企业集中保存         |
| 指纹浏览器                   | 不作为标准配置       |
| 独立 Sales 住宅 IP           | 不作为标准配置       |

---

## 13. 最终推荐架构

```text
                         ARMOR 广州办公室

                                  │
                 ┌────────────────┴────────────────┐
                 │                                 │
                 ▼                                 ▼

          Brand Environment                    Sales Team

                 │                                 │
        ┌────────┴────────┐                ┌───────┼───────┐
        │                 │                ▼       ▼       ▼
        ▼                 ▼             Sales A Sales B Sales C

Brand Publishing    Brand Social Phone
  Workstation              │
        │                  │
        └────────┬─────────┘
                 │
                 ▼

         Brand 固定稳定网络
                 │
                 ▼

       Official Brand Assets

       LinkedIn Company Page
       Meta Business Portfolio
       Facebook Page
       Instagram
       YouTube
       TikTok
                 │
                 ▼

        Corporate Identity Layer

        Corporate Email
        Overseas Number
        Password Manager
        Authenticator / Passkey
        Recovery Codes
        Admin Permissions


Sales Team
    │
    ▼
香港固定企业出口
    │
    ▼
LinkedIn Personal
Email
CRM
WhatsApp
Personal Content
```

---

## 14. 常见疑问

### Q1：每个平台是不是只需要一个品牌账号？

ARMOR 当前原则上是。

现阶段不需要建立品牌账号矩阵。

### Q2：Brand Publishing Workstation 用 Windows 还是 macOS？

都可以。

ARMOR 当前阶段更推荐 macOS，因为环境简单、容易专机专用、维护成本低。

这不是平台风控要求。

### Q3：品牌需要一台官方社媒专用手机吗？

建议需要。

它作为 Brand Social Phone，负责：

- 官方 App；
- 海外 SIM；
- SMS；
- 2FA；
- Passkey；
- 登录确认；
- 紧急恢复；
- 移动端功能。

### Q4：Brand Social Phone 可以登录官方社媒 App 吗？

可以。

关键不是禁止登录 App，而是保持固定设备、固定使用角色和相对稳定的网络环境。

### Q5：Brand Workstation 和 Brand Phone 必须同一个 IP 吗？

不必须。

长期固定在办公室运营时，Brand Phone 优先连接与 Workstation 相同的企业 Wi-Fi，可以减少网络环境复杂度。

原则：

> **稳定优先，而不是 IP 强行一致。**

### Q6：需要关闭手机 GPS 吗？

没有业务需要的 App，可以根据最小权限原则关闭不必要的位置访问。

但不要伪造 GPS 或使用虚假定位。

### Q7：品牌海外 SIM 应该放在哪里？

长期放在：

> **Brand Social Phone。**

不要在员工私人手机之间频繁移动。

### Q8：注册账号应该使用手机号还是企业邮箱？

多数平台优先使用企业长期控制的邮箱作为核心身份，再绑定企业海外号码作为验证和恢复路径。

原则：

```text
Email
+
Phone
+
2FA
+
Recovery
```

而不是：

```text
Phone Only
```

### Q9：所有品牌账号都应该在手机上注册吗？

不需要。

应根据平台自身账号结构，在 Brand Environment 内完成。

### Q10：Sales 需要指纹浏览器吗？

默认不需要。

真实员工 + 真实个人账号 + 固定工作设备即可。

### Q11：每个 Sales 需要一条住宅 IP 吗？

不需要。

Sales 可以共享香港固定企业出口。

### Q12：Sales 可以用手机发 LinkedIn 吗？

可以。

推荐电脑作为主要工作环境，手机作为辅助环境。

### Q13：Sales 的内容可以用品牌电脑代发吗？

不建议。

Sales Personal 应由 Sales 本人在自己的设备发布。

### Q14：VPS 可以作为企业出口吗？

可以。

前提是：

- IP 相对固定；
- 地区固定；
- 长期使用；
- 不频繁切换。

### Q15：什么时候才考虑指纹浏览器？

当未来真正存在：

- 多品牌；
- 多账号隔离；
- 测试账号；
- 独立矩阵；

再考虑。

### Q16：海外号码应该选最便宜的吗？

不是。

优先级应该是：

```text
长期稳定
>
验证码能力
>
账号恢复
>
使用便利
>
价格
```

---

## 15. 最终实施原则

### 原则 1：品牌账号唯一化

> 一个品牌，在每个平台原则上维护一个官方账号。

### 原则 2：Brand 双设备化

> Brand Environment 由 Brand Publishing Workstation 与 Brand Social Phone 共同组成。

### 原则 3：Workstation 主导化

> 内容生产、后台管理和主要发布工作以 Brand Publishing Workstation 为主。

### 原则 4：Phone 辅助化

> Brand Social Phone 负责移动 App、SIM、2FA、登录确认和移动端能力。

### 原则 5：Sales 环境个人化

> 每个 Sales 使用自己的真实个人账号和固定设备。

### 原则 6：网络稳定优先

> 不频繁换国家，不追求复杂伪装。

### 原则 7：指纹浏览器非默认化

> 没有真实隔离需求，就不使用。

### 原则 8：内容集中生产

> 市场统一提供主题、素材和内容框架。

### 原则 9：账号分别发布

> Brand 发 Brand 内容，Sales 发 Personal 内容。

### 原则 10：权限企业化

> 官方平台权限优先于共享密码。

### 原则 11：号码资产化

> 海外手机号不是一次性验证码工具，而是企业数字身份基础设施。

### 原则 12：安全冗余化

> 企业邮箱、SIM、Authenticator / Passkey、Recovery Codes、备用管理员共同构成恢复体系。

### 原则 13：设备公司化

> Brand Workstation、Brand Social Phone、Brand SIM、品牌素材和核心凭证都属于公司。

### 原则 14：位置与环境真实化

> 不进行 GPS Spoofing、虚假定位或为了规避平台检测而伪造设备环境。

### 原则 15：系统简单化

> 如果一个复杂工具并不能解决真实问题，就不要加入基础设施。

---

## 16. 最终目标

成熟的海外 B2B 社媒基础设施应该做到：

```text
新员工入职
→ 不需要学习复杂 Proxy 和指纹浏览器

Sales 开始工作
→ 固定电脑 + 香港网络即可

Sales 发动态
→ 自己的账号自己发布

品牌发内容
→ Brand Publishing Workstation 为主

需要移动端功能
→ Brand Social Phone

需要短信验证码
→ Brand Corporate SIM

Sales 离职
→ 企业权限和客户可回收

市场人员离职
→ Brand Workstation、Brand Phone、SIM 和账号仍属于公司

Brand Phone 损坏
→ 通过企业邮箱、Recovery Codes、备用管理员等方式恢复

SIM 失效
→ 不影响全部账号恢复能力

Brand Workstation 损坏
→ 可以重新部署

网络故障
→ 有备用线路

企业扩大
→ 架构可以继续扩展
```

最终形成：

> **账号少而清晰、设备职责明确、网络稳定、员工使用简单、恢复路径冗余、企业资产可控、长期维护成本低的海外 B2B 社媒运营体系。**