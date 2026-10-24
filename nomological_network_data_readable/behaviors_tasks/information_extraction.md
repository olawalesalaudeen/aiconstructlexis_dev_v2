# Information extraction
**Type:** Behavior  
**Referenced in:** 145 papers  
**Also known as:** Attribute value extraction, Object entity extraction, Source/sink extraction, Attribute extraction, Patient attribute extraction, Observation extraction, Entity extraction, Slot filling, Numerical answer extraction, Key answer extraction, Choice identification, Proposition extraction, Keyword extraction, Atomic proposition grounding, Frequent words extraction, Knowledge extraction, Cognitive pathway extraction, Schema extraction, Symptom extraction, Value extraction, Argument component identification, Value identification, Feature extraction from text, Fine-grained semantic extraction, Aspect extraction, Unstructured evidence extraction, Emotion-cause annotation, Emotion-cause extraction, Attentional focus extraction, Clinical finding extraction, Factual assertion extraction, Candidate extraction, Edge extraction, Node extraction, Property extraction, Sticker extraction, Constraint type extraction, Constraint extraction, Content extraction, Topic extraction, Graph structure extraction, Evidence extraction, Promise extraction, Reference extraction, Inorganic synthesis recipe extraction, Key-fact extraction, Causal tree extraction, Cause-effect span extraction, Frame-semantic argument extraction, Knowledge slice extraction, Numeric data extraction, Nested field extraction, Parallel term extraction, Spatial primitive extraction, Information Extraction, Table extraction, Implicit target extraction, Text extraction, Character relationship extraction, Clinical entity extraction, Contextual parameter identification, Legal element recognition, Legal relation extraction, Relation analysis, Relation mining, Structured information extraction, Slot-filling, Emotion cause extraction  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats information extraction as directly identifying and extracting structured or otherwise relevant information from unstructured text, and in some cases from semi-structured or multimodal inputs. Many formulations specify the output as entities, relations, events, attributes, facts, values, or field-value pairs, while narrower versions ask for items such as chart titles, axis labels, legend labels, labeled ticks, webpage content, or attributes drawn from tables. Success is usually framed as returning the target items themselves, though some papers instead define it as recalling specific information from extensive interactive histories or as directly extracting attributes from relevant tables rather than retrieving whole tables.

**Variants.** Papers also use many narrower names for the same broad behavior. Common variants recast it as slot filling, entity extraction, proposition extraction, evidence extraction, and schema extraction, and the surrounding settings range across scientific documents, visually rich documents, charts, tables, webpages, audio, clinical notes, legal text, and dialogue. A recurring difference is the extraction unit: some tasks target short spans or predefined slots, some target structured JSON or table-like outputs, and some treat successful interviewing as obtaining as much information as possible from a source over multiple turns.

**Space of elicitation and scores.** Papers measure it with 11 instruments. The most frequently linked are T-REx, SLURP, ZsRE, FUNSD, and Human evaluation, followed by 6 other instruments. Together these operationalizations span slot-filling datasets, document extraction benchmarks, and human-scored evaluations, with the remaining instruments extending to long-term memory, audio understanding, dialogue, receipt extraction, scientific abstract extraction, and other information extraction tasks.

**What it is taken as evidence of.** Papers do not converge on a single construct that this behavior reflects. The most common linked construct is Reasoning, with one paper claiming a causal relationship from Information extraction to Reasoning and another reporting it is related to Reasoning because reasoning prompts combine visual data, textual prompts, and extracted knowledge. Beyond Reasoning, one paper makes reciprocal causal claims between Information extraction and Hallucination resistance, other papers relate it to Long-context understanding and Long-term memory, and one paper claims a causal relationship from Persuasiveness to Information extraction, while the remaining 3 linked constructs are reported only as related.

## Sources

**[Achieving Human Parity in Content-Grounded Datasets Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf)**
> The task of identifying and extracting structured information from unstructured text.

**[Shopping MMLU: A Massive Multi-Task Online Shopping Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2049d75dd13db049897562bcf7d59da8-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Attribute value extraction")**
> The task of identifying and extracting the value of a specific attribute from product metadata.

**[Image Textualization: An Automatic Framework for Generating Rich and Detailed Image Descriptions](https://proceedings.neurips.cc/paper_files/paper/2024/file/c37d94c04effc86d72ab2258ba9b76c7-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Object entity extraction")**
> The task of identifying and extracting noun phrases that refer to objects from a given textual description.

**[LLMDFA: Analyzing Dataflow in Code with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed9dcde1eb9c597f68c1d375bbecf3fc-Paper-Conference.pdf) (as "Source/sink extraction")**
> Identifying program variables or expressions that serve as designated starting points and endpoints for dataflow analysis.

**[MO-DDN: A Coarse-to-Fine Attribute-based Exploration Agent for Multi-Object Demand-driven Navigation](https://proceedings.neurips.cc/paper_files/paper/2024/file/7565f036ceb20a2c74d341bfaa9fffad-Paper-Conference.pdf) (as "Attribute extraction")**
> The observable action of identifying and listing semantic attributes for instructions or objects via prompting.

**[MedCalc-Bench: Evaluating Large Language Models for Medical Calculations](https://proceedings.neurips.cc/paper_files/paper/2024/file/99e81750f3fdfcaf9613db2dbf4bd623-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Patient attribute extraction")**
> Extracting relevant numerical or categorical values from a long patient note for use in a calculation.

**[DiReCT: Diagnostic Reasoning for Clinical Notes via Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/892850bf793e03b5c410dfd9425b94c8-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Observation extraction")**
> The task of identifying and extracting specific text spans from a clinical note that serve as evidence (observations) for a particular diagnostic conclusion.

**[Reasoning of Large Language Models over Knowledge Graphs with Super-Relations](https://proceedings.iclr.cc/paper_files/paper/2025/file/0c6799a1a5db47be8864fed46ba77697-Paper-Conference.pdf) (as "Entity extraction")**
> Identifying entities at the end of a reasoning path that may serve as candidate answers.

**[RAG-DDR: Optimizing Retrieval-Augmented Generation Using Differentiable Data Rewards](https://proceedings.iclr.cc/paper_files/paper/2025/file/1a87980b9853e84dfb295855b425c262-Paper-Conference.pdf) (as "Slot filling")**
> The task of identifying and extracting specific, predefined types of information (slots) from unstructured text.

**[OptiBench Meets ReSocratic: Measure and Improve LLMs for Optimization Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/3deb687c44d3687ace0729e5db3b4efd-Paper-Conference.pdf) (as "Numerical answer extraction")**
> The task of parsing the output of an executed code solver to identify and report the specific numerical values for decision variables and the objective function.

**[xFinder: Large Language Models as Automated Evaluators for Reliable Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/9602d22a8c791f23f8e4d1398e3fb5be-Paper-Conference.pdf) (as "Key answer extraction")**
> The observable task of identifying and isolating the specific, final answer from a model's potentially verbose or complex textual response.

**[Empowering Users in Digital Privacy Management through Interactive LLM-Based Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/bef8e5620c699630405adafaa86cb038-Paper-Conference.pdf) (as "Choice identification")**
> The observable task of identifying and extracting sections of a privacy policy that describe user choices or opt-out mechanisms.

**[SiReRAG: Indexing Similar and Related Information for Multihop Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9668d223e713943634dce9c66e8f2c1-Paper-Conference.pdf) (as "Proposition extraction")**
> Identifying factual statements from text that capture important information, preferably about entities.

**[Unnatural Languages Are Not Bugs but Features for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/duan25c/duan25c.pdf) (as "Keyword extraction")**
> Identifying and retaining tokens from unnatural inputs that appear in the corresponding natural language version, while disregarding noise.

**[Grammar-Forced Translation of Natural Language to Temporal Logic using LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/english25a/english25a.pdf) (as "Atomic proposition grounding")**
> The process of identifying and extracting atomic predicates (state variables or events) from a natural language input as a pre-processing step for translation.

**[Overtrained Language Models Are Harder to Fine-Tune](https://raw.githubusercontent.com/mlresearch/v267/main/assets/springer25a/springer25a.pdf) (as "Knowledge extraction")**
> The task of identifying and retrieving specific pieces of factual information from unstructured text.

**[ShadowKV: KV Cache in Shadows for High-Throughput Long-Context LLM Inference](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25b/sun25b.pdf) (as "Frequent words extraction")**
> Identifying and extracting the most frequently occurring words from a given text.

**[MentalGLM Series: Explainable Large Language Models for Mental Health Analysis on Chinese Social Media](https://aclanthology.org/2025.emnlp-main.686.pdf) (as "Cognitive pathway extraction")**
> Extracting structured representations of cognitive-behavioral patterns from text, including triggering events, thoughts, emotions, and behavioral responses, based on CBT theory.

**[Knowledge-Aware Co-Reasoning for Multidisciplinary Collaboration](https://aclanthology.org/2025.emnlp-main.687.pdf) (as "Symptom extraction")**
> Identifying relevant symptom entities from a patient's natural language description for use in diagnostic reasoning.

**[PPTAgent: Generating and Evaluating Presentations Beyond Text-to-Slides](https://aclanthology.org/2025.emnlp-main.728.pdf) (as "Schema extraction")**
> The process of identifying and structuring the constituent elements of a slide into a defined format, including each element's category, description, and content.

**[From Scores to Steps: Diagnosing and Improving LLM Performance in Evidence-Based Medical Calculations](https://aclanthology.org/2025.emnlp-main.548.pdf) (as "Value extraction")**
> The model correctly identifies and extracts numerical and categorical variables (e.g., age, creatinine level) from clinical vignettes for use in calculations.

**[Exploring Quality and Diversity in Synthetic Data Generation for Argument Mining](https://aclanthology.org/2025.emnlp-main.1351.pdf) (as "Argument component identification")**
> The observable task of identifying a set of argument components in a text, where each component is defined by its start and end token indices and its type (e.g., 'Claim', 'Premise').

**[SQUiD: Synthesizing Relational Databases from Unstructured Text](https://aclanthology.org/2025.emnlp-main.1629.pdf) (as "Value identification")**
> Extracting relevant data values from text such as names, dates, and attributes, and organizing them into structured intermediate representations.

**[Model-based Large Language Model Customization as Service](https://aclanthology.org/2025.emnlp-main.248.pdf) (as "Feature extraction from text")**
> Identifying and converting named entities and values from unstructured natural language descriptions into structured feature vectors consistent with a predefined schema.

**[LLM-Guided Semantic Relational Reasoning for Multimodal Intent Recognition](https://aclanthology.org/2025.emnlp-main.1130.pdf) (as "Fine-grained semantic extraction")**
> Identifying detailed semantic cues such as actions, facial expressions, and interactions from multimodal inputs.

**[LaMP-QA: A Benchmark for Personalized Long-form Question Answering](https://aclanthology.org/2025.emnlp-main.60.pdf) (as "Aspect extraction")**
> Identifying and listing key information needs or expectations from a user's question narrative, used to form evaluation rubrics.

**[Unstructured Evidence Attribution for Long Context Query Focused Summarization](https://aclanthology.org/2025.emnlp-main.95.pdf) (as "Unstructured evidence extraction")**
> Copying arbitrary-length text spans from a long input context to serve as supporting evidence for summary sentences, without constraints on span boundaries such as sentence or paragraph limits.

**[ECC: An Emotion-Cause Conversation Dataset for Empathy Response](https://aclanthology.org/2025.emnlp-main.306.pdf) (as "Emotion-cause extraction")**
> Identifying the dialogue sentences that express the emotion and the sentences that express the cause.

**[ECC: An Emotion-Cause Conversation Dataset for Empathy Response](https://aclanthology.org/2025.emnlp-main.306.pdf) (as "Emotion-cause annotation")**
> The process of identifying and labeling utterances in a dialogue that express an emotion and its underlying cause, based on predefined seeds and contextual alignment.

**[Uncovering Argumentative Flow: A Question-Focus Discourse Structuring Framework](https://aclanthology.org/2025.emnlp-main.416.pdf) (as "Attentional focus extraction")**
> The process of identifying and listing key analytical aspects or dimensions emphasized in an argumentative unit, such as social groups or conceptual perspectives.

**[Structuring Radiology Reports: Challenging LLMs with Lightweight Models](https://aclanthology.org/2025.emnlp-main.392.pdf) (as "Clinical finding extraction")**
> Identifying and organizing relevant clinical observations (e.g., abnormalities, normal findings) under appropriate organ system categories in the Findings section.

**[Uncovering Argumentative Flow: A Question-Focus Discourse Structuring Framework](https://aclanthology.org/2025.emnlp-main.416.pdf) (as "Factual assertion extraction")**
> The task of identifying and extracting verifiable statements of fact from a source text.

**[Answering Narrative-Driven Recommendation Queries via a Retrieve--Rank Paradigm and the OCG-Agent](https://aclanthology.org/2025.emnlp-main.667.pdf) (as "Candidate extraction")**
> The behavior of identifying and extracting potential recommendation items from retrieved text fragments based on a structured template.

**[Evaluating LLM-Generated Diagrams as Graphs](https://aclanthology.org/2025.emnlp-main.640.pdf) (as "Edge extraction")**
> Detecting directed connections between diagram elements by analyzing visual cues such as arrows and lines, using vision-capable LLMs to infer logical flows.

**[Evaluating LLM-Generated Diagrams as Graphs](https://aclanthology.org/2025.emnlp-main.640.pdf) (as "Node extraction")**
> Identifying and grouping text elements in an SVG diagram into coherent nodes, using spatial and semantic criteria, potentially refined with multimodal LLMs.

**[Facilitating Long Context Understanding via Supervised Chain-of-Thought Reasoning](https://aclanthology.org/2025.emnlp-main.615.pdf) (as "Property extraction")**
> Identifying key measurable metrics and their associated subjects from a query to support answering, such as 'revenue' and '<Company A>’s 2018 annual report'.

**[Sticker-TTS: Learn to Utilize Historical Experience with a Sticker-driven Test-Time Scaling Framework](https://aclanthology.org/2025.emnlp-main.621.pdf) (as "Sticker extraction")**
> Producing a structured summary of key conditions, strategies, and limitations from a prior reasoning trace to serve as a compact guide for future reasoning.

**[ConstraintLLM: A Neuro-Symbolic Framework for Industrial-Level Constraint Programming](https://aclanthology.org/2025.emnlp-main.809.pdf) (as "Constraint type extraction")**
> The observable process of identifying and classifying the specific types of constraints (e.g., AllDifferent, Cumulative) present in a natural language problem description.

**[PlanGEN: A Multi-Agent Framework for Generating Planning and Reasoning Trajectories for Complex Problem Solving](https://aclanthology.org/2025.emnlp-main.1042.pdf) (as "Constraint extraction")**
> Identifying the relevant rules, schedules, concepts, or other instance-specific requirements from a problem statement.

**[Web Intellectual Property at Risk: Preventing Unauthorized Real-Time Retrieval by Large Language Models](https://aclanthology.org/2025.emnlp-main.870.pdf) (as "Content extraction")**
> Parsing and extracting textual information from retrieved webpages, including visible elements and hidden source-code components.

**[PychoAgent: Psychology-driven LLM Agents for Explainable Panic Prediction on Social Media during Sudden Disaster Events](https://aclanthology.org/2025.emnlp-main.865.pdf) (as "Topic extraction")**
> The process of identifying and consolidating the main themes or subjects present in a user's historical posts.

**[MA-GTS: A Multi-Agent Framework for Solving Complex Graph Problems in Real-World Applications](https://aclanthology.org/2025.emnlp-main.973.pdf) (as "Graph structure extraction")**
> The task of identifying and parsing graph components like nodes, edges, and weights from unstructured or semi-structured text.

**[ML-Promise: A Multilingual Dataset for Corporate Promise Verification](https://aclanthology.org/2025.emnlp-main.1028.pdf) (as "Evidence extraction")**
> The task of extracting the specific text span corresponding to the evidence supporting a corporate promise from a document.

**[ML-Promise: A Multilingual Dataset for Corporate Promise Verification](https://aclanthology.org/2025.emnlp-main.1028.pdf) (as "Promise extraction")**
> The task of extracting the specific text span corresponding to a corporate promise from a document.

**[InterIDEAS: Philosophical Intertextuality via LLMs](https://aclanthology.org/2025.emnlp-main.1180.pdf) (as "Reference extraction")**
> Identifying and isolating mentions of people, texts, events, or ideas within philosophical writings, including both explicit and implicit references.

**[LLaMP: Large Language Model Made Powerful for High-fidelity Materials Knowledge Retrieval](https://aclanthology.org/2025.emnlp-main.1280.pdf) (as "Inorganic synthesis recipe extraction")**
> The task of extracting and summarizing step-by-step procedures for synthesizing inorganic materials from scientific literature.

**[Towards a Holistic and Automated Evaluation Framework for Multi-Level Comprehension of LLMs in Book-Length Contexts](https://aclanthology.org/2025.emnlp-main.1241.pdf) (as "Key-fact extraction")**
> Identifying and structuring central themes, supporting ideas, and fine-grained details from text segments into a hierarchical representation.

**[Causal Tree Extraction from Medical Case Reports: A Novel Task for Experts-like Text Comprehension](https://aclanthology.org/2025.emnlp-main.1313.pdf) (as "Causal tree extraction")**
> The task of generating a structured, multi-layered causal tree from an unstructured medical case report, where nodes are medical entities and edges represent causal or evidential relationships.

**[A Multi-Level Benchmark for Causal Language Understanding in Social Media Discourse](https://aclanthology.org/2025.emnlp-main.1464.pdf) (as "Cause-effect span extraction")**
> The task of identifying and labeling the specific text segments (spans) that correspond to the cause and the effect in a causal relationship.

**[TaxoAlign: Scholarly Taxonomy Generation Using Language Models](https://aclanthology.org/2025.emnlp-main.1536.pdf) (as "Knowledge slice extraction")**
> Identifying and extracting text segments from research papers that are highly relevant to a given taxonomy topic.

**[Enhancing Study-Level Inference from Clinical Trial Papers via Reinforcement Learning-Based Numeric Reasoning](https://aclanthology.org/2025.emnlp-main.1544.pdf) (as "Numeric data extraction")**
> The observable task of identifying and extracting specific numerical values, such as event counts or standard deviations, from unstructured text and presenting them in a structured format.

**[Beyond Human Labels: A Multi-Linguistic Auto-Generated Benchmark for Evaluating Large Language Models on Resume Parsing](https://aclanthology.org/2025.emnlp-main.1626.pdf) (as "Nested field extraction")**
> The specific task of extracting information from hierarchical or nested structures within a document, such as job roles within a work experience section.

**[Translating Domain-Specific Terminology in Typologically-Diverse Languages: A Study in Tax and Financial Education](https://aclanthology.org/2025.emnlp-main.1774.pdf) (as "Parallel term extraction")**
> The task of identifying and extracting the translation of a specific source term from a parallel text, which consists of a source sentence and its corresponding translation.

**[FoREST: Frame of Reference Evaluation in Spatial Reasoning Tasks](https://aclanthology.org/2025.emnlp-main.1772.pdf) (as "Spatial primitive extraction")**
> Identifying and outputting directional, topological, and distal spatial relations along with Frame of Reference from a spatial expression to support downstream reasoning tasks.

**[TRANSIENTTABLES: Evaluating LLMs' Reasoning on Temporally Evolving Semi-structured Tables](https://aclanthology.org/2025.naacl-long.332.pdf) (as "Information Extraction")**
> A two-stage evaluation method that tests a model's ability to directly extract relevant attributes from tables without full table retrieval, focusing on fine-grained evidence extraction.

**[SciLitLLM: How to Adapt LLMs for Scientific Literature Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/8cb240de90aa20207db944c6c88a7cc0-Paper-Conference.pdf) (as "Table extraction")**
> Reading scientific text or tables and producing structured table-like information from the source content.

**[LLM-Driven Implicit Target Augmentation and Fine-Grained Contextual Modeling for Zero-Shot and Few-Shot Stance Detection](https://aclanthology.org/2025.emnlp-main.299.pdf) (as "Implicit target extraction")**
> The observable process of identifying targets not explicitly mentioned in the text but semantically implied, such as inferring 'democracy' as a target in a discussion about corporate regulation.

**[VisRAG: Vision-based Retrieval-augmented Generation on Multi-modality Documents](https://proceedings.iclr.cc/paper_files/paper/2025/file/3640a1997a4c9571cea9db2c82e1fc35-Paper-Conference.pdf) (as "Text extraction")**
> Converting visual text within document images into machine-readable text format.

**[Agent-as-Judge for Factual Summarization of Long Narratives](https://aclanthology.org/2025.emnlp-main.1204.pdf) (as "Character relationship extraction")**
> Identifying and representing subject-predicate-object triples that describe interactions, states, and roles among characters in a narrative.

**[CMedCalc-Bench: A Fine-Grained Benchmark for Chinese Medical Calculations in LLM](https://aclanthology.org/2025.emnlp-main.1302.pdf) (as "Clinical entity extraction")**
> Identifying relevant patient attributes, such as lab values, vital signs, or symptoms, from clinical notes.

**[Context Reasoner: Incentivizing Reasoning Capability for Contextualized Privacy and Safety Compliance via Reinforcement Learning](https://aclanthology.org/2025.emnlp-main.44.pdf) (as "Contextual parameter identification")**
> Correctly identifying elements of information flow such as sender, subject, recipient, and information type in a legal scenario based on contextual cues.

**[LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Legal element recognition")**
> Identifying the legal elements contained in a legal text from answer options.

**[LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Legal relation extraction")**
> Identifying and extracting specific types of legal relationship triples from a given legal text.

**[Synthetic continued pretraining](https://proceedings.iclr.cc/paper_files/paper/2025/file/6dcf277ea32ce3288914faf369fe6de0-Paper-Conference.pdf) (as "Relation analysis")**
> The task of describing the relationships between a given set of entities within the context of a source document.

**[Unified Parameter-Efficient Unlearning for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/8d537430e55a283a97e9b6e682e994a3-Paper-Conference.pdf) (as "Relation mining")**
> The observable task of identifying relationships between entities or concepts using Multimodal Large Language Models.

**[MatViX: Multimodal Information Extraction from Visually Rich Articles](https://aclanthology.org/2025.naacl-long.185.pdf) (as "Structured information extraction")**
> Producing structured JSON outputs that capture both material compositions and associated property data from full-length scientific articles containing text, tables, and figures.

**[INJONGO: A Multicultural Intent Detection and Slot-filling Dataset for 16 African Languages](https://aclanthology.org/2025.acl-long.464.pdf) (as "Slot-filling")**
> Extracting specific entities (slots) from a user utterance, such as amounts, locations, or dates, to support task execution in dialogue systems.

**[One Unified Model for Diverse Tasks: Emotion Cause Analysis via Self-Promote Cognitive Structure Modeling](https://aclanthology.org/2025.naacl-long.516.pdf) (as "Emotion cause extraction")**
> Identifying text clauses that describe events causing a specified emotion experienced by characters in the text.

## Relationships

### Information extraction →
- **T-REx** (measurements) — *measured_by*
  > two slot filling datasets: T-REx (ElSahar et al., 2018) and Zero-Shot RE (Petroni et al., 2021);
  - [Think-on-Graph: Deep and Responsible Reasoning of Large Language Model on Knowledge Graph](https://proceedings.iclr.cc/paper_files/paper/2024/file/10a6bdcabbd5a3d36b760daa295f63c1-Paper-Conference.pdf)
- **ZsRE** (measurements) — *measured_by*
  > two slot filling datasets: T-REx (ElSahar et al., 2018) and Zero-Shot RE (Petroni et al., 2021);
  - [Think-on-Graph: Deep and Responsible Reasoning of Large Language Model on Knowledge Graph](https://proceedings.iclr.cc/paper_files/paper/2024/file/10a6bdcabbd5a3d36b760daa295f63c1-Paper-Conference.pdf)
- **SLURP** (measurements) — *measured_by*
  > “SF SLURP ...”
  - [SALMONN: Towards Generic Hearing Abilities for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/476ab8f369e489c04187ba84f68cfa68-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > The tasks of question decomposition, knowledge extraction, and note-taking are interconnected, each contributing towards navigating the reasoning path from a question to its answer.
  - [Boosting the Potential of Large Language Models with an Intelligent Information Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/28d38c036365420f61ce03300418e44a-Paper-Conference.pdf)
- **SWDE** (measurements) — *measured_by*
  > we consider the following six recall-intensive tasks: information extraction tasks like FDA and SWDE (Arora et al., 2024a; 2023b; Wu et al., 2021; Deng et al., 2022) (Section 5.2)
  - [Longhorn: State Space Models are Amortized Online Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/ee0e45ff4de76cbfdf07015a7839f339-Paper-Conference.pdf)
- **MMAU** (measurements) — *measured_by*
  > “It includes information extraction1 and reasoning 2 questions”
  - [MMAU: A Massive Multi-Task Audio Understanding and Reasoning Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/d36f208919582785db965fe648b9fe59-Paper-Conference.pdf)
- **LongMemEval** (measurements) — *measured_by*
  > We introduce LONGMEMEVAL, a comprehensive benchmark designed to evaluate five core long-term memory abilities of chat assistants: information extraction, multi-session reasoning, temporal reasoning, knowledge updates, and abstention. (Abstract)
  - [LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/d813d324dbf0598bbdc9c8e79740ed01-Paper-Conference.pdf)
- **Evaluation reliability** (constructs) — *causes*
  > optimizing the key answer extraction module improves extraction accuracy and enhances evaluation reliability. (ABSTRACT)
  - [xFinder: Large Language Models as Automated Evaluators for Reliable Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/9602d22a8c791f23f8e4d1398e3fb5be-Paper-Conference.pdf)
- **Hallucination resistance** (constructs) — *causes*
  > Focusing on relevant table cells helps LLMs by providing the right context, thus reducing hallucinations in reasoning. (Section 2)
  - [H-STAR: LLM-driven Hybrid SQL-Text Adaptive Reasoning on Tables](https://aclanthology.org/2025.naacl-long.445.pdf)
- **FUNSD** (measurements) — *measured_by*
  > We evaluate BLOCKIE on three established information extraction benchmarks: CORD (Park et al., 2019)... FUNSD (Jaume et al., 2019)... (Section 5.1)
  - [Information Extraction from Visually Rich Documents using LLM-based Organization of Documents into Independent Textual Segments](https://aclanthology.org/2025.acl-long.844.pdf)
- **SROIE** (measurements) — *measured_by*
  > We evaluate BLOCKIE on three established information extraction benchmarks: ... SROIE (Huang et al., 2019), a receipt information extraction dataset. (Section 5.1)
  - [Information Extraction from Visually Rich Documents using LLM-based Organization of Documents into Independent Textual Segments](https://aclanthology.org/2025.acl-long.844.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > The proposed method achieves a human evaluation score of 82.7, which substantially outperforms the baseline (Ozaki et al., 2022) by 20.2 points. (Abstract)
  - [Causal Tree Extraction from Medical Case Reports: A Novel Task for Experts-like Text Comprehension](https://aclanthology.org/2025.emnlp-main.1313.pdf)
- **SciERC** (measurements) — *measured_by*
  > “SciERC | IE(Rel) | CS abstract | 6 entity types”
  - [SciRIFF: A Resource to Enhance Language Model Instruction-Following over Scientific Literature](https://aclanthology.org/2025.emnlp-main.310.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > MT-Bench (Zheng et al., 2024), consists of 80 multi-turn dialogues spanning various domains, including writing, roleplay, reasoning, math, coding, extraction, STEM, and humanities. (Section 3.1)
  - [FuseChat: Knowledge Fusion of Chat Models](https://aclanthology.org/2025.emnlp-main.1096.pdf)

### → Information extraction
- **Retrieval-augmented generation** (behaviors tasks) — *causes*
  > DRAG incorporates extensive retrieved documents within the demonstrations, enabling long-context LLMs to learn to extract relevant information and answer questions using a rich input context. (Section 3.2)
  - [Inference Scaling for Long-Context Retrieval Augmented Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b57471758783450408f5c9b70257d15b-Paper-Conference.pdf)

### Associated with
- **Understanding** (constructs)
  > Tasks at the Understanding level examine the ability to comprehend and interpret facts, entities, concepts, and relationships in legal texts, which serves as a foundational requirement for applying knowledge to downstream tasks. We construct five tasks at this level: Legal Element Recognition (2-1)... (Section C.3.2)
  - [LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Long-term memory** (constructs)
  > To comprehensively reflect the challenge, LONGMEMEVAL formulates five core long-term memory abilities: • Information Extraction (IE): Ability to recall specific information from extensive interactive histories... (Section 3.2)
  - [LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/d813d324dbf0598bbdc9c8e79740ed01-Paper-Conference.pdf)
- **Ranking** (behaviors tasks)
  > To leverage the instruction following abilities in modern LLMs, we formulate the re-ranking task into either question answering (QA) or information extraction (IE) tasks, which are more commonly seen by LLMs. (Section 3.1)
  - [Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf)
- **Long-context understanding** (constructs)
  > Medical scenarios involve complex case histories, and selecting values from these contexts tests the capacity for long-context processing. (Section 1)
  - [MeNTi: Bridging Medical Calculator and LLM Agent with Nested Tool Calling](https://aclanthology.org/2025.naacl-long.263.pdf)
- **Spatial reasoning** (constructs)
  > Documents exhibit diverse formats and structures, requiring spatial reasoning to correctly associate text with their semantic roles. (Section 1)
  - [Information Extraction from Visually Rich Documents using LLM-based Organization of Documents into Independent Textual Segments](https://aclanthology.org/2025.acl-long.844.pdf)
- **Table reasoning** (constructs)
  > Our qualitative analysis of model responses reveals that Table-R1-Zero not only acquires multi-step reasoning and reflection abilities like other reasoning models, but also develops essential table-specific reasoning skills such as semantic understanding, information extraction, and arithmetic computation. (Section 1)
  - [Table-R1: Inference-Time Scaling for Table Reasoning Tasks](https://aclanthology.org/2025.emnlp-main.1040.pdf)
- **Instruction following** (behaviors tasks)
  > to identify hallucinations existed in the reference description, we first extract object entities (object nouns and phrases) from it. Here, we leverage the strong instruction following ability of the Large Language Model (LLM). (Sec. 3.2.1)
  - [Image Textualization: An Automatic Framework for Generating Rich and Detailed Image Descriptions](https://proceedings.neurips.cc/paper_files/paper/2024/file/c37d94c04effc86d72ab2258ba9b76c7-Paper-Datasets_and_Benchmarks_Track.pdf)
