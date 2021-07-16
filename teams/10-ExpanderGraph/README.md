## 基本资料

项目名称：ExpanderGraph

项目立项日期 ：2021年5月

## 项目整体简介
- 产品定位：
我们致力于挖掘区块链数据价值。提供链上数据分析及可视化服务，通过算法进行项目评级、地址标注、地址监控、风险控制等。基于区块链建立数据共享激励机制，搭建去中心化的数据要素交易市场。
- 解决的问题：
链上数据挖掘及展示，对链上地址进行标注，用户可以了解地址、项目更真实的信息,监控项目持仓状况及大额交易，对项目进行评级及风险预警。
基于区块链的数据服务交易及激励机制，降低数据使用方的成本，提高数据提供方收益。
- 技术架构图
![image](https://github.com/Expandergraph/hackathon-2021-summer/blob/dev/teams/10-ExpanderGraph/docs/image/arch.jpg?raw=true)
- 产品需求文档

  [expandergrpah 需求文档](https://github.com/Expandergraph/hackathon-2021-summer/blob/dev/teams/10-ExpanderGraph/docs/expandergraph%20%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A3.pdf)
## 黑客松期间计划完成的事项

### 区块链开发
- 链开发

ExpanderGraph 数据交易市场平行链开发。
- 合约开发

数据市场合约开发。

### 链上数据分析服务开发

- 前端开发

链上数据可视化前端开发。
- 后端开发

后台服务程序开发。

链上数据(Eth、Polkadot)获取、解析程序开发。


## 黑客松期间所完成的事项 (7月5日初审前提交)
- 7月5日前，在本栏列出黑客松期间最终完成的功能点。

合约代码，合约运行在canvas-node环境。使用erc20合约产生一定量的gas,gas用来购买数据市场提供的数据服务。

前端代码，主要完成数据的可视化显示。

后端服务器，负责提供前端显示所需要的数据。

polkadot链上数据获取/解析/入库。

eth链上数据获取/解析/入库。

- 把相关代码放在 `src` 目录里，并在本栏列出在黑客松期间打完成的开发工作/功能点。我们将对这些目录/档案作重点技术评审。

src/contract: 合约代码，合约运行在canvas-node环境。使用erc20合约产生一定量的gas,gas用来购买数据市场提供的数据服务。

src/expandergraph-io: 前端代码，主要完成数据的可视化显示。

src/python-backend: 后端服务器，负责提供前端显示所需要的数据。

src/data-service: polkadot链上数据获取/解析/入库。

src/crypto-crawler: eth链上数据获取/解析/入库。

- 可选：放一段不长于 **5 分钟** 的产品 DEMO 展示视频, 命名为 `团队目录/docs/demo.mp4`。
## 队员信息

名字：Github

小马哥: yahtoo

HDX: hdexpander

Russell: ruoguluo

Jihui Zheng: zjhmale

晓强: daqingchong0809

张潇予: moliqingcha000

林海: linhai

mars

0xjhtdm




