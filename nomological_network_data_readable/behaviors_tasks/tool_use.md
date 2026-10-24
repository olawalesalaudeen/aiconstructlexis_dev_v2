# Tool use
**Type:** Behavior  
**Referenced in:** 165 papers  
**Also known as:** Tool calling, Tool usage, Tool invocation, Tool-integrated reasoning, Function calling, API call generation, Tool execution, API selection, Multi-step tool calling, API chaining, Multi-API calling, Single-API calling, Dependent function calling, Parallel function calling, Tool usage updating, Code generation and execution, API interaction, Remote server interaction, API call selection, API calling, Function Calling, Nested tool calling, Parameter selection, Function selection, Tool selection, Tool interaction, Tool utilization, Tool application, API function calling, API call execution, Function invocation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats tool use as selecting, invoking, and using external tools, functions, APIs, models, or code interpreters while solving a task. Most formulations count success as identifying when a tool is needed, choosing the appropriate tool, and generating the required call, code, or arguments, and several also include executing the tool and incorporating returned outputs into later reasoning or answer formation. Most papers describe this as an observable act, though some define it more broadly as a latent capability; a narrower line of work focuses on syntactically and semantically correct API or function calls, while broader formulations include using tool outputs even when they may conflict with the user's request.

**Variants.** Papers use several close labels for this behavior, especially function calling, tool calling, tool invocation, tool selection, and tool-integrated reasoning. A recurring split is between single-call and multi-call settings, including cases where calls must be coordinated in parallel or through dependencies, and some formulations instead center on writing and executing code or directly interacting with APIs. The behavior is also studied in multi-turn and multimodal settings and in domain-specific workflows such as mathematical, geospatial, clinical, legal, and IT tasks.

**Space of elicitation and scores.** Papers measure it with 16 instruments. The most common instruments are BFCL and ToolBench, followed by GAIA, API-Bank, and BigCodeBench: papers use these to score correct tool and parameter calls, multi-turn reasoning and tool usage, real-world tool-using scenarios, and code generation with diverse function calls, and some papers adapt API datasets to tool selection. A smaller measurement pattern uses judge-based pairwise comparisons or coherence-style scoring when there is no fixed ground truth.

**What it is taken as evidence of.** Papers connect tool use to 7 constructs, most often Planning, Tool use ability, Reasoning, Grounding, and Instruction following ability. There is no single agreed construct that it reflects: some papers claim Planning or Reasoning cause tool use, while other papers claim a causal relationship from tool use to Planning or Reasoning. Tool use ability is both related to and claimed to cause tool use, Grounding is only related to it, and Instruction following ability is claimed to cause tool use by enabling correct tool-invocation format.

## Sources

**[RL-GPT: Integrating Reinforcement Learning and Code-as-policy](https://proceedings.neurips.cc/paper_files/paper/2024/file/31f119089f702e48ecfd138c1bc82c4a-Paper-Conference.pdf)**
> The behavior of invoking and utilizing an external capability or system, such as an RL training pipeline, to solve a sub-problem.

**[Advancing Tool-Augmented Large Language Models: Integrating Insights from Errors in Inference Trees](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0f7ee1901fef1da4dae2b88dfd43195-Paper-Conference.pdf) (as "Tool calling")**
> The observable action of executing a chosen tool with specific parameters, typically by generating a formatted API request.

**[Unlocking the Capabilities of Thought: A Reasoning Boundary Framework to Quantify and Optimize Chain-of-Thought](https://proceedings.neurips.cc/paper_files/paper/2024/file/62ab1c2cb4b03e717005479efb211841-Paper-Conference.pdf) (as "Tool usage")**
> Using external tools during reasoning to perform computations or other operations.

**[UrbanKGent: A Unified Large Language Model Agent Framework for Urban Knowledge Graph Construction](https://proceedings.neurips.cc/paper_files/paper/2024/file/decd42d78c42cea59c95c7c3d40d5e0f-Paper-Conference.pdf) (as "Tool invocation")**
> The action of calling external, specialized functions, such as a distance calculator or geohash encoder, to obtain information needed for a reasoning process.

**[Not All Tokens Are What You Need for Pretraining](https://proceedings.neurips.cc/paper_files/paper/2024/file/3322a9a72a1707de14badd5e552ff466-Paper-Conference.pdf) (as "Tool-integrated reasoning")**
> The behavior of solving problems by generating and executing code or using other external tools as part of the reasoning process.

**[Compact Language Models via Pruning and Knowledge Distillation](https://proceedings.neurips.cc/paper_files/paper/2024/file/4822991365c962105b1b95b1107d30e5-Paper-Conference.pdf) (as "Function calling")**
> The task of identifying when to use external tools or APIs based on a user's request and generating the correct function calls with appropriate arguments.

**[Gorilla: Large Language Model Connected with Massive APIs](https://proceedings.neurips.cc/paper_files/paper/2024/file/e4c61f578ff07830f5c37378dd3ecb0d-Paper-Conference.pdf) (as "API call generation")**
> The task of producing a syntactically and semantically correct API call based on a natural language instruction.

**[ToolACE: Winning the Points of LLM Function Calling](https://proceedings.iclr.cc/paper_files/paper/2025/file/663865ea167425c6c562cb0b6bcf76c7-Paper-Conference.pdf) (as "API selection")**
> Choosing the appropriate API from a candidate tool list for a user request.

**[An Intelligent Agentic System for Complex Image Restoration Problems](https://proceedings.iclr.cc/paper_files/paper/2025/file/921ac785fa9edc73cacaf2664f43d234-Paper-Conference.pdf) (as "Tool execution")**
> Sequentially applying specific IR models or tools to the image according to the planned operations.

**[ToolDial: Multi-turn Dialogue Generation Method for Tool-Augmented Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/afb27164624b641e8fbba961b2301acf-Paper-Conference.pdf) (as "API chaining")**
> The observable behavior of calling multiple APIs in sequence where one API's output serves as another's input.

**[AgentHarm: A Benchmark for Measuring Harmfulness of LLM Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/c493d23af93118975cdbc32cbe7323f5-Paper-Conference.pdf) (as "Multi-step tool calling")**
> Executing several tool calls in sequence, often with dependencies between calls, to satisfy a request.

**[Understanding the Generalization of In-Context Learning in Transformers: An Empirical Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/bd19ca8039547b339a6a37bd4df24405-Paper-Conference.pdf) (as "Single-API calling")**
> A specific tool-calling task that requires only a single API invocation to fulfill the user's instruction.

**[Understanding the Generalization of In-Context Learning in Transformers: An Empirical Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/bd19ca8039547b339a6a37bd4df24405-Paper-Conference.pdf) (as "Multi-API calling")**
> A complex tool-calling task that requires the combined use of multiple API invocations to achieve a desired functionality.

**[ToolACE: Winning the Points of LLM Function Calling](https://proceedings.iclr.cc/paper_files/paper/2025/file/663865ea167425c6c562cb0b6bcf76c7-Paper-Conference.pdf) (as "Dependent function calling")**
> A specific type of function calling where the model makes a sequence of API calls, where the output of one call is used as the input for a subsequent call.

**[ToolACE: Winning the Points of LLM Function Calling](https://proceedings.iclr.cc/paper_files/paper/2025/file/663865ea167425c6c562cb0b6bcf76c7-Paper-Conference.pdf) (as "Parallel function calling")**
> A specific type of function calling where the model makes multiple, independent API calls simultaneously to fulfill a user request.

**[Learning Evolving Tools for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d8d1d325f822e07d16866780cc23deb2-Paper-Conference.pdf) (as "Tool usage updating")**
> The observable process of a model summarizing the usage of a new or changed tool and incorporating that new definition into its available tool set, often within the prompt context.

**[Agentic Reasoning: A Streamlined Framework for Enhancing LLM Reasoning with Agentic Tools](https://aclanthology.org/2025.acl-long.1383.pdf) (as "Code generation and execution")**
> The behavior of writing and running code to perform computations or other programmatic tasks as part of a larger problem-solving process.

**[EnIGMA: Interactive Tools Substantially Assist LM Agents in Finding Security Vulnerabilities](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abramovich25a/abramovich25a.pdf) (as "Remote server interaction")**
> The observable action of an agent using a tool to initiate, maintain, and terminate connections with an external server to send and receive data.

**[MapEval: A Map-Based Evaluation of Geo-Spatial Reasoning in Foundation Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dihan25a/dihan25a.pdf) (as "API interaction")**
> Generating valid API queries, processing structured responses, and using the retrieved data to support reasoning and answer formulation.

**[CIFLEX: Contextual Instruction Flow for Sub-task Execution in Multi-Turn Interactions with a Single On-Device LLM](https://aclanthology.org/2025.emnlp-main.533.pdf) (as "API call selection")**
> Selecting and generating the appropriate API invocation based on a multi-modal user query, such as one involving an image reference.

**[Learning to Ask: When LLM Agents Meet Unclear Instruction](https://aclanthology.org/2025.emnlp-main.1104.pdf) (as "API calling")**
> The model generates function calls with arguments to invoke external tools in response to a user request.

**[CRMArena: Understanding the Capacity of LLM Agents to Perform Professional CRM Tasks in Realistic Environments](https://aclanthology.org/2025.naacl-long.194.pdf) (as "Function Calling")**
> An agentic evaluation setup in which the model interacts with the environment through Python wrapper functions that call CRM APIs.

**[MeNTi: Bridging Medical Calculator and LLM Agent with Nested Tool Calling](https://aclanthology.org/2025.naacl-long.263.pdf) (as "Nested tool calling")**
> The ability to recursively invoke additional tools during task execution when initial tools or information are insufficient, enabling resolution of complex dependencies such as unit mismatches or missing parameters.

**[MTU-Bench: A Multi-granularity Tool-Use Benchmark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4d13b2d99519c5415661dad44ab7edcd-Paper-Conference.pdf) (as "Parameter selection")**
> The observable action of identifying and providing the correct arguments or parameters for a selected tool call.

**[Robust Function-Calling for On-Device Language Model via Function Masking](https://proceedings.iclr.cc/paper_files/paper/2025/file/d45e0bfb5a39477d56b55c0824200008-Paper-Conference.pdf) (as "Function selection")**
> Choosing the correct function from a set of candidate functions given a user intent and function descriptions.

**[TaskBench: Benchmarking Large Language Models for Task Automation](https://proceedings.neurips.cc/paper_files/paper/2024/file/085185ea97db31ae6dcac7497616fd3e-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Tool selection")**
> Choosing the appropriate tools for each subtask and representing their dependencies as a tool invocation graph.

**[CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing](https://proceedings.iclr.cc/paper_files/paper/2024/file/fef126561bbf9d4467dbb8d27334b8fe-Paper-Conference.pdf) (as "Tool interaction")**
> The observable behavior of generating queries to and processing responses from external tools such as search engines or interpreters.

**[ACT: Knowledgeable Agents to Design and Perform Complex Tasks](https://aclanthology.org/2025.acl-long.823.pdf) (as "Tool utilization")**
> The observable process of an LLM-based agent interacting with and using external tools to accomplish a task.

**[Enhancing Open-Domain Task-Solving Capability of LLMs via Autonomous Tool Integration from GitHub](https://aclanthology.org/2025.acl-long.845.pdf) (as "Tool application")**
> Using external tools such as APIs to retrieve financial data or perform computations as part of solving a financial task, demonstrated through step-by-step operational descriptions.

**[Hephaestus: Improving Fundamental Agent Capabilities of Large Language Models through Continual Pre-Training](https://aclanthology.org/2025.naacl-long.308.pdf) (as "API function calling")**
> The observable action of generating a syntactically correct and semantically appropriate API function call, including function names and parameters, in response to a task description.

**[AXIS: Efficient Human-Agent-Computer Interaction with API-First LLM-Based Agents](https://aclanthology.org/2025.acl-long.381.pdf) (as "API call execution")**
> The model performs direct function calls to application programming interfaces to modify content or state, bypassing UI interactions.

**[The Berkeley Function Calling Leaderboard (BFCL): From Tool Use to Agentic Evaluation of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/patil25a/patil25a.pdf) (as "Function invocation")**
> The observable act of generating a syntactically correct call to an external function or API with appropriate parameters.

## Relationships

### Tool use →
- **ToolBench** (measurements) — *measured_by*
  > The ability to use external tools is a significant milestone in the development of LLMs... For this purpose, we utilize the large-scale tool usage dataset ToolBench [21]... (Section 3.2)
  - [StreamBench: Towards Benchmarking Continuous Improvement of Language Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/c189915371c4474fe9789be3728113fc-Paper-Datasets_and_Benchmarks_Track.pdf)
- **BFCL** (measurements) — *measured_by*
  > function calling (BFCL)
  - [Compact Language Models via Pruning and Knowledge Distillation](https://proceedings.neurips.cc/paper_files/paper/2024/file/4822991365c962105b1b95b1107d30e5-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > Recent studies have shown that LLMs can mitigate hallucination by accessing general-purpose tools (Schick et al., 2023; Tang et al., 2023; Patil et al., 2023; Qin et al., 2023; Wang et al., 2024b). (Section 1)
  - [Adapting While Learning: Grounding LLMs for Scientific Problems with Tool Usage Adaptation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lyu25a/lyu25a.pdf)
- **GAIA** (measurements) — *measured_by*
  > We evaluate MaAS on six public benchmarks covering three domains: ... and (3) tool use, GAIA (Mialon et al., 2023) (Section 4.1).
  - [Multi-agent Architecture Search via Agentic Supernet](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bi/zhang25bi.pdf)
- **API-Bank** (measurements) — *measured_by*
  > In particular, when looking at the tool use evaluation sets (BFCL and API Bank), it is evident that the ability to use tools can be acquired effectively by adding ∆Θ to the base model...
  - [Param$\Delta$ for Direct Mixing: Post-Train Large Language Model At Zero Cost](https://proceedings.iclr.cc/paper_files/paper/2025/file/78bca5cc621a0846cb1f8265e1927a2a-Paper-Conference.pdf)
- **BigCodeBench** (measurements) — *measured_by*
  > We introduce BigCodeBench, a new high-quality programming benchmark constructed via the collaboration between human experts and LLMs, assessing the capability of tool use and complex instruction following. (Section 6)
  - [BigCodeBench: Benchmarking Code Generation with Diverse Function Calls and Complex Instructions](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6a90bcc2aa470c3871b2d39a67d26e8-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > Win Rate (Win%), which evaluates effectiveness through pairwise comparisons by a ChatGPT-based evaluator, capturing nuanced performance differences not reflected by rule-based metrics. (Section 3.1)
  - [From Exploration to Mastery: Enabling LLMs to Master Tools via Self-Driven Interactions](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c22e5e918198702765ecff4b20d0a90-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > Teaching large language models (LLMs) to use tools for solving complex problems can grant them human-like reasoning abilities. (Abstract)
  - [Smurfs: Multi-Agent System using Context-Efficient DFSDT for Tool Planning](https://aclanthology.org/2025.naacl-long.169.pdf)
- **HotpotQA** (measurements) — *measured_by*
  > HotPotQA [49] features natural, multi-hop questions, which challenge an agent’s ability to perform reasoning and utilize search tools.
  - [AGILE: A Novel Reinforcement Learning Framework of LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/097c514162ea7126d40671d23e12f51b-Paper-Conference.pdf)
- **Complex reasoning question answering** (behaviors tasks) — *causes*
  > These tools enable agents to perform complex tasks like multi-step problem-solving and retrieving diverse information, which is essential for complex retrieval and question-answering (QA) (Section 1).
  - [AvaTaR: Optimizing LLM Agents for Tool Usage via Contrastive Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2db8ce969b000fe0b3fb172490c33ce8-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *causes*
  > They utilize integrated natural language reasoning steps and Python code to improve performance on mathematical reasoning tasks. (Section 1)
  - [MathCoder2: Better Math Reasoning from Continued Pretraining on Model-translated Mathematical Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/bea94fe9c5573e74294657f692069d89-Paper-Conference.pdf)
- **ToolQA** (measurements) — *measured_by*
  > ToolQA (Zhuang et al., 2024) evaluates agents’ abilities to use external tools. (§4.2.1)
  - [OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/a4b6ad6b48850c0c331d1259fc66a69c-Paper-Conference.pdf)
- **GPQA** (measurements) — *measured_by*
  > GPQA (Rein et al., 2023) evaluates agents’ ability for coordinated tool use when solving challenging graduate-level problems. (§4.4)
  - [OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/a4b6ad6b48850c0c331d1259fc66a69c-Paper-Conference.pdf)
- **StableToolBench** (measurements) — *measured_by*
  > By comparing the accuracy of function calls with ToolLlama (Qin et al., 2024) and two one-shot baselines (Qwen-2-72B and GPT-4) on StableToolBench, we find that the above procedure is effective (shown in Figure 5). (Section 4.1)
  - [Benchmarking Agentic Workflow Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/adbe936993aa7cf41e45054d8b72f183-Paper-Conference.pdf)
- **Unit conversion** (behaviors tasks) — *causes*
  > If MeNTi detects a mismatch in parameter units, it employs the nested tool calling mechanism to identify the need for additional tools. This mechanism enables iterative tool selection and utilization to resolve unit mismatches caused by complex toolchains requiring multiple tools. (Section 3.1)
  - [MeNTi: Bridging Medical Calculator and LLM Agent with Nested Tool Calling](https://aclanthology.org/2025.naacl-long.263.pdf)
- **ToolAlpaca** (measurements) — *measured_by*
  > ToolAlpaca contains 3.9k tool-use instances from a multi-agent simulation environment, which we augment to a MCQ format. (Section 4.1)
  - [Prune ’n Predict: Optimizing LLM Decision-making with Conformal Prediction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/vishwakarma25b/vishwakarma25b.pdf)
- **MMAU** (measurements) — *measured_by*
  > We evaluate the tool use performance on MMAU (Yin et al., 2024) and report the performance on Tool Execution and Tool Planning.
  - [Instruction-Following Pruning for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hou25b/hou25b.pdf)
- **APIBench** (measurements) — *measured_by*
  > “We evaluate PORTS on six popular tool-augmented datasets: ToolBench (Qin et al., 2024), API-Bank (Li et al., 2023), APIBench (Peng et al., 2023), BFCL-v2 (Yan et al., 2024), ToolE (Huang et al., 2024), Octopus-v2 (Chen and Li, 2024).”
  - [PORTS: Preference-Optimized Retrievers for Tool Selection with Large Language Models](https://aclanthology.org/2025.emnlp-main.507.pdf)
- **BFCL-v2** (measurements) — *measured_by*
  > “We evaluate PORTS on six popular tool-augmented datasets: ToolBench (Qin et al., 2024), API-Bank (Li et al., 2023), APIBench (Peng et al., 2023), BFCL-v2 (Yan et al., 2024), ToolE (Huang et al., 2024), Octopus-v2 (Chen and Li, 2024).”
  - [PORTS: Preference-Optimized Retrievers for Tool Selection with Large Language Models](https://aclanthology.org/2025.emnlp-main.507.pdf)

### → Tool use
- **Planning** (constructs) — *causes*
  > After the planning step, our agent takes action to construct adaptive VL prompts for the tool models (i.e., VLM/LLM). (Section 1)
  - [Re-Aligning Language to Visual Objects with an Agentic Workflow](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d9057d84a9fc37523bf826232ea6820-Paper-Conference.pdf)
- **Tool use ability** (constructs) — *causes*
  > Tool learning enables Large Language Models (LLMs) to interact with external environments by invoking tools, serving as an effective strategy to mitigate the limitations inherent in their pre-training data. (ABSTRACT)
  - [From Exploration to Mastery: Enabling LLMs to Master Tools via Self-Driven Interactions](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c22e5e918198702765ecff4b20d0a90-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > The LLM must use reasoning to deduce the suitable tools to address the given tasks. (Section 1)
  - [GTA: A Benchmark for General Tool Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a75ee6d4b2eb0b777f549a32a5a5c28-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Information retrieval** (behaviors tasks) — *causes*
  > Recently, the focus has shifted towards the use of retrievers to effectively support LLMs in the tool selection process (Section 1).
  - [PORTS: Preference-Optimized Retrievers for Tool Selection with Large Language Models](https://aclanthology.org/2025.emnlp-main.507.pdf)
- **Instruction following ability** (constructs) — *causes*
  > lacks sufficient instruction-following ability to invoke tools in a correct format. (Section 4.3)
  - [GTA: A Benchmark for General Tool Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a75ee6d4b2eb0b777f549a32a5a5c28-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Task decomposition** (behaviors tasks) — *causes*
  > Through its task decomposition mechanism, Smurfs transforms long-context tasks into simpler ones, enabling the untrained model to effectively utilize external tools for managing complex tasks. (Section 4.1)
  - [Smurfs: Multi-Agent System using Context-Efficient DFSDT for Tool Planning](https://aclanthology.org/2025.naacl-long.169.pdf)

### Associated with
- **Action selection** (behaviors tasks)
  > “Actions involve selecting which tool to call and the input to that tool.”
  - [NAT: Enhancing Agent Tuning with Negative Samples](https://aclanthology.org/2025.naacl-long.378.pdf)
- **Code generation** (behaviors tasks)
  > The actor then generates revised actions, which could include a combination of tool usage through programming language (code generation) along with natural language explanations of how the tools are employed. (Section 4.1).
  - [AvaTaR: Optimizing LLM Agents for Tool Usage via Contrastive Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2db8ce969b000fe0b3fb172490c33ce8-Paper-Conference.pdf)
- **Explanation generation** (behaviors tasks)
  > our proposed Tool-integrated Reasoning format interleaves rationales with program-based tool use. (Figure 2)
  - [ToRA: A Tool-Integrated Reasoning Agent for Mathematical Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3cf1559a8795eb1ed2b3ad52409ac7d-Paper-Conference.pdf)
- **Chain of thought** (behaviors tasks)
  > we opt for the framework of the ReAct agent that performs step-by-step reasoning for tool usage... In each step, the agent generates thought and corresponding code to execute tools.
  - [Multi-modal Agent Tuning: Building a VLM-Driven Agent for Efficient Tool Usage](https://proceedings.iclr.cc/paper_files/paper/2025/file/238747e153a84f50b43fd50fa8504f33-Paper-Conference.pdf)
- **Grounding** (constructs)
  > This requires decomposing a task, grounding intention to tools, and using the results for further actions, relying on natural language reasoning and programming abilities (Section 3.2)
  - [Lemur: Harmonizing Natural Language and Code for Language Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/41ec0e510c31883f3b50a782651fb5b9-Paper-Conference.pdf)
- **Web navigation** (behaviors tasks)
  > Tool Use: The ability to interact with external tools and APIs, including functions such as web browsing, code execution, and file uploads. (Section 2.1)
  - [Law of the Weakest Link: Cross Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63ea6a7d01a34a2c7334dcf1a2c3b03d-Paper-Conference.pdf)
- **Code execution** (behaviors tasks)
  > Tool Use: The ability to interact with external tools and APIs, including functions such as web browsing, code execution, and file uploads. (Section 2.1)
  - [Law of the Weakest Link: Cross Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63ea6a7d01a34a2c7334dcf1a2c3b03d-Paper-Conference.pdf)
- **Prompt compression** (behaviors tasks)
  > “In agent, API documentation can be compressed to enable more efficient tool use”
  - [Prompt Compression for Large Language Models: A Survey](https://aclanthology.org/2025.naacl-long.368.pdf)
- **Multi-hop reasoning** (constructs)
  > We propose SCRIBE, a framework for multi-hop tool reasoning, where models must flexibly call tools and self-reflect to generate high-quality responses. (Section 1)
  - [SCRIBE: Structured Chain Reasoning for Interactive Behaviour Explanations using Tool Calling](https://aclanthology.org/2025.emnlp-main.1490.pdf)
- **Self-reflection** (behaviors tasks)
  > After the tool use step, the refined expression is sent to an LLM-based reflector for feedback (i.e., reflection). (Section 1)
  - [Re-Aligning Language to Visual Objects with an Agentic Workflow](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d9057d84a9fc37523bf826232ea6820-Paper-Conference.pdf)
- **Parameter extraction** (behaviors tasks)
  > In the first step, we facilitate the slot filling by inputting comprehensive medical records, tool descriptions, and their function docstrings into the LLM... enabling accurate information choices, and then to use the tool appropriately. (Section 3.3)
  - [MeNTi: Bridging Medical Calculator and LLM Agent with Nested Tool Calling](https://aclanthology.org/2025.naacl-long.263.pdf)
