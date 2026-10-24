# WebShop
**Type:** Measurement  
**Referenced in:** 33 papers  
**Also known as:** Webshop, Web Shopping  

## State of the Field

**What it is.** Across the surveyed work, papers most commonly treat WebShop as an interactive benchmark environment that simulates an online shopping or e-commerce website. The prevailing description is that an agent follows a user instruction by browsing or navigating webpages, using search and click actions, selecting attributes or options, and purchasing a matching product; some definitions add that it contains a large amount of real-world product data or over a million real-world products, and one description frames it as navigating scraped amazon.com pages. A smaller line of work describes it as an online shopping dataset or benchmark task rather than an environment, and papers also note dense final rewards from 0 to 1, completion-level scoring, attribute, option, product type, and price matching, and tasks with 30 timesteps.

**What it is claimed to measure.** Papers link WebShop to 3 constructs and 4 behavioral indicators. The most common behavioral use is to measure web navigation, with smaller lines of work using it for action selection; on the construct side, it is reported as measuring decision-making most often, and is also used for reasoning and problem-solving ability. Overall, the claims spread across several targets rather than centering on a single construct, though web navigation is the prevailing behavioral framing.

**Space of uses.** Papers link it to 1 other measurement instrument, AgentBench, through a related claim: one paper says it follows the AgentBench setup for LLM evaluation on the validation split, using the default matching reward. More broadly, papers usually position WebShop as one benchmark within broader agent evaluation suites rather than as a standalone instrument. It is frequently used alongside ALFWorld, and some papers also pair it with ScienceWorld or place it among mixes of web, embodied, tool-use, game, or coding tasks.

**Concerns raised.** A few papers discuss operational risks within this environment rather than benchmark variants. One characterizes WebShop as having large action spaces, another notes that agents use actions like search and click and that click[Buy Now] is critical due to financial risk, and another studies Query-Attack and Observation-Attack on the WebShop dataset.

## Sources

**[Multimodal Web Navigation with Instruction-Finetuned Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/7ef7d8359036afd8c2378d82c21058a4-Paper-Conference.pdf)**
> A benchmark environment that simulates an online shopping website, where an agent must navigate, search, and select product attributes to find and purchase a specific item based on a user instruction.

**[AgentSquare: Automatic LLM Agent Search in Modular Design Space](https://proceedings.iclr.cc/paper_files/paper/2025/file/0ae94013da7cd459402fd77874e09ee3-Paper-Conference.pdf) (as "Webshop")**
> A benchmark for evaluating LLM agents on web-based shopping tasks.

**[Generative Prompt Internalization](https://aclanthology.org/2025.naacl-long.376.pdf) (as "Web Shopping")**
> A benchmark task where an agent must navigate scraped e-commerce web pages to find a specific product by using click and search actions.

## Relationships

### → WebShop
- **Web navigation** (behaviors tasks) — *measured_by*
  > We evaluate LEAP across 3 decision-making domains: ALFWorld, a text-based game, WebShop, a web navigation environment, and Intercode, an interactive coding environment.
  - [Better than Your Teacher: LLM Agents that learn from Privileged AI Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/1c60ed2b01120d383eebf12dc7a0e138-Paper-Conference.pdf)
- **Decision-making** (constructs) — *measured_by*
  > We use 100, 500, and 500 instances for Game of 24, WebShop, and ToolBench to evaluate the decision-making ability respectively.
  - [Rational Decision-Making Agent with Learning Internal Utility Judgment](https://proceedings.iclr.cc/paper_files/paper/2025/file/45994782a61bb51cad5c2bae36834265-Paper-Conference.pdf)
