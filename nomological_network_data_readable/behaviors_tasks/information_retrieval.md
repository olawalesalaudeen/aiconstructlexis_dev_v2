# Information retrieval
**Type:** Behavior  
**Referenced in:** 259 papers  
**Also known as:** Evidence page retrieval, Evidence retrieval, Passage retrieval, Subgraph retrieval, Query matching, Material retrieval, Multi-table retrieval, Page-level retrieval, Table retrieval, Tool retrieval, Visual retrieval, Dependency retrieval, External knowledge retrieval, Long-term memory search, Short-term memory search, Document retrieval, Keyword-based file retrieval, Long-document retrieval, Memory retrieval, Retrieval, Semantic file retrieval, Sequence recall, Paper retrieval, Literature search, Document similarity search, Argumentative retrieval, File retrieval, Image crop retrieval, Sentence retrieval, Generative retrieval, Text retrieval, Long caption retrieval, Page retrieval, Prior case retrieval, Short caption retrieval, Statute retrieval, Argument retrieval, Literature retrieval, Tutorial retrieval, Legal case retrieval, Provision retrieval, Support sentence retrieval, Ad retrieval, Structured data retrieval, Cross-paragraph retrieval, Multi-step retrieval, Scientific literature search, Table-column retrieval, BioAssay retrieval, Content retrieval, Simple lookup, Cross-lingual retrieval, Relevant fact extraction, Web data retrieval, Database retrieval, Iterative retrieval, Reasoning with retrieved documents, Think-and-search, Image retrieval, Cross-file retrieval, Entity retrieval, Relation retrieval, Reasoning path retrieval, Dense retrieval, Material property retrieval, Multi-hop evidence retrieval, Multimodal document retrieval, Visual document retrieval, Cascade retrieval, Layout-level retrieval, Multilingual retrieval, Academic paper search, Factual knowledge retrieval, Information retrieval and localization, Retrievability, Associative memory retrieval, Causal retrieval, Information retrieval capability, Parametric knowledge retrieval, Task vector retrieval, Knowledge retrieval, Retrieval performance, Evidence recall, Implicit fact retrieval, Information Retrieval, Number retrieval, Subgraph extraction, Similar case identification  

## State of the Field

**Space of definitions.** Across papers, the dominant framing treats this behavior as query-conditioned finding, ranking, and extracting of relevant information from some store, usually a document corpus, a long context, or memory. Many formulations require returning relevant passages, documents, pages, tables, or sentences, often as top-k candidates or ranked lists, while others narrow success to locating a specific fact, value, number, image, or support sentence, or to returning a document or page identifier. A smaller line of work casts it as open-domain or tool-mediated search over the web, literature, tools, or external knowledge, and another recurring formulation uses Needle-in-a-Haystack style tasks that test whether a model can locate a small relevant piece within a large context.

**Variants.** The most recurrent variants differ mainly by the retrieved unit: passage retrieval, evidence retrieval, document retrieval, memory retrieval, and table retrieval. Around these, papers define narrower settings such as page-level and sentence retrieval, and adapt the behavior to knowledge graphs, where the retrieved object can be a subgraph, entity, relation, or reasoning path. Other papers study domain or modality specific forms, including tools and files, legal cases and statutes, scientific literature, materials and BioAssays, images and multimodal documents, cross-lingual retrieval, and short-term or long-term memory search.

**Space of elicitation and scores.** Papers measure this behavior with 30 instruments. The most frequently linked are BEIR, MTEB, MS MARCO, SlideVQA, and AIR-Bench (information retrieval), and the remaining instruments span many other retrieval, multimodal document, and long-context benchmarks, including VQA-style datasets and domain-specific testbeds. Scoring is usually framed as ranking or top-k retrieval, using measures such as Recall, Hits, MRR, NDCG, precision, and retrieval accuracy.

**What it is taken as evidence of.** When papers connect this behavior to constructs, they distribute it across 11 constructs rather than tying it to one shared construct. The most recurrent link is with Multi-hop reasoning, which some papers report as related to information retrieval and others treat as causally downstream of it; among the other frequent constructs, papers claim causal relationships from Consistency to information retrieval, from information retrieval to Evidence grounding and Interpretability and explainability, and in both directions between information retrieval and Cross-lingual alignment. Additional construct links involve Long-context understanding, Long-term memory, Memory management, Multi-table reasoning, Relevance, and Semantic understanding, so the construct attribution is not uniform across papers.

## Sources

**[From Isolated Conversations to Hierarchical Schemas: Dynamic Tree Memory Representation for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/0382cb76309820f71c6eacd47b36ce71-Paper-Conference.pdf)**
> The process of finding and extracting relevant information from a memory store or document corpus in response to a query.

**[SV-RAG: LoRA-Contextualizing Adaptation of  MLLMs for Long Document Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d40c7b4d78bf7f08ba532542818f6c0-Paper-Conference.pdf) (as "Evidence page retrieval")**
> The observable task of identifying and fetching the most relevant page or pages from a multi-page document in response to a user's query.

**[TidalDecode: Fast and Accurate LLM Decoding with Position Persistent Sparse Attention](https://proceedings.iclr.cc/paper_files/paper/2025/file/11440c427f0f76f191ac06b50d7a2517-Paper-Conference.pdf) (as "Passage retrieval")**
> The task of identifying and retrieving text passages from a large corpus that are relevant to a given query.

**[Simple is Effective: The Roles of Graphs and Large Language Models in Knowledge-Graph-Based Retrieval-Augmented Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/11e1900e680f5fe1893a8e27362dbe2c-Paper-Conference.pdf) (as "Subgraph retrieval")**
> Selecting a relevant subset of triples from a knowledge graph to support downstream reasoning.

**[CofCA: A STEP-WISE Counterfactual Multi-hop QA benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/2628d4d3b054c2d7ad33ab03435204f4-Paper-Conference.pdf) (as "Evidence retrieval")**
> The process of identifying and extracting relevant pieces of information from a given set of passages or documents to support an answer.

**[MMQA: Evaluating LLMs with Multi-Table Multi-Hop Complex Questions](https://proceedings.iclr.cc/paper_files/paper/2025/file/794a425a2e47e05d29d30f79b79a692d-Paper-Conference.pdf) (as "Multi-table retrieval")**
> The task of selecting a set of relevant and joinable tables from a larger corpus in order to answer a given question.

**[MatExpert: Decomposing Materials Discovery By Mimicking Human Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/7d6850f4c82520793f738d98a72aab9d-Paper-Conference.pdf) (as "Material retrieval")**
> The observable task of identifying and retrieving an existing material from a database that most closely matches a user-provided description of desired properties.

**[From Exploration to Mastery: Enabling LLMs to Master Tools via Self-Driven Interactions](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c22e5e918198702765ecff4b20d0a90-Paper-Conference.pdf) (as "Tool retrieval")**
> The task of selecting the most relevant tool(s) from a large collection based on a user's query or a given problem context.

**[ColPali: Efficient Document Retrieval with Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/99e9e141aafc314f76b0ca3dd66898b3-Paper-Conference.pdf) (as "Page-level retrieval")**
> Given a query, selecting the correct document page from a corpus of candidate pages.

**[ColPali: Efficient Document Retrieval with Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/99e9e141aafc314f76b0ca3dd66898b3-Paper-Conference.pdf) (as "Table retrieval")**
> The task of retrieving documents or pages based on the content of tables they contain.

**[ColPali: Efficient Document Retrieval with Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/99e9e141aafc314f76b0ca3dd66898b3-Paper-Conference.pdf) (as "Query matching")**
> The online process of matching a query against a pre-built document index to rank and retrieve relevant documents.

**[MuirBench: A Comprehensive Benchmark for Robust Multi-image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/9cf6139382f98623d08cc595622f3fb1-Paper-Conference.pdf) (as "Visual retrieval")**
> Finding an image that matches a target image or contains the same depicted entity or scene.

**[Streaming Video Understanding and Multi-round Interaction with Memory-enhanced Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/ad2fa437f7c23e4e9875599c6065d18a-Paper-Conference.pdf) (as "Long-term memory search")**
> Recalling and answering questions about events that occurred more than a minute prior to the user's query in a video.

**[Streaming Video Understanding and Multi-round Interaction with Memory-enhanced Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/ad2fa437f7c23e4e9875599c6065d18a-Paper-Conference.pdf) (as "Short-term memory search")**
> Responding to user queries about events that concluded less than 20 seconds prior, testing recall of recent activities.

**[Reasoning-Enhanced Healthcare Predictions with Knowledge Graph Community Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/cb5a3b4589c1a16f14740396625cbfc8-Paper-Conference.pdf) (as "Knowledge retrieval")**
> Retrieving relevant medical knowledge from a knowledge graph or corpus to support prediction.

**[Rethinking and Improving Autoformalization: Towards a Faithful Metric and a Dependency Retrieval-based Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/d630537fc4402cfa3ebbc7450a0cac91-Paper-Conference.pdf) (as "Dependency retrieval")**
> Selecting relevant formal objects from a library for an informal statement.

**[MMFakeBench: A Mixed-Source Multimodal Misinformation Detection Benchmark for LVLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/d6c53fe062716387ff0df73cc53de60c-Paper-Conference.pdf) (as "External knowledge retrieval")**
> Querying outside knowledge sources to obtain evidence relevant to a verification decision.

**[VisRAG: Vision-based Retrieval-augmented Generation on Multi-modality Documents](https://proceedings.iclr.cc/paper_files/paper/2025/file/3640a1997a4c9571cea9db2c82e1fc35-Paper-Conference.pdf) (as "Document retrieval")**
> The process of selecting relevant document pages from a corpus based on a query.

**[From Commands to Prompts: LLM-based Semantic File System for AIOS](https://proceedings.iclr.cc/paper_files/paper/2025/file/517eb19e99947f60afff0cf93e451825-Paper-Conference.pdf) (as "Semantic file retrieval")**
> The observable task of retrieving files based on the semantic similarity of their content to a natural language query, rather than exact keyword matching.

**[From Commands to Prompts: LLM-based Semantic File System for AIOS](https://proceedings.iclr.cc/paper_files/paper/2025/file/517eb19e99947f60afff0cf93e451825-Paper-Conference.pdf) (as "Keyword-based file retrieval")**
> Retrieving files that contain specified keywords in their names or contents.

**[Agent Security Bench (ASB): Formalizing and Benchmarking Attacks and Defenses in LLM-based Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/5750f91d8fb9d5c02bd8ad2c3b44456b-Paper-Conference.pdf) (as "Memory retrieval")**
> The process of an agent accessing and retrieving relevant information from a memory database or knowledge base.

**[Making Text Embedders Few-Shot Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/5eba8556ce2d1afff57591464d48fbc3-Paper-Conference.pdf) (as "Retrieval")**
> Selecting the most relevant passage or candidate for a query based on embedding similarity.

**[Making Text Embedders Few-Shot Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/5eba8556ce2d1afff57591464d48fbc3-Paper-Conference.pdf) (as "Long-document retrieval")**
> The task of retrieving relevant information or documents from a collection of long-form texts in response to a query.

**[Building, Reusing, and Generalizing Abstract Representations from Concrete Sequences](https://proceedings.iclr.cc/paper_files/paper/2025/file/e46984e056185b21ddb1e7973c365f14-Paper-Conference.pdf) (as "Sequence recall")**
> The observable task of reproducing a sequence of items that was previously presented.

**[Can LLMs Generate Novel Research Ideas? A Large-Scale Human Study with 100+ NLP Researchers](https://proceedings.iclr.cc/paper_files/paper/2025/file/ea94957d81b1c1caf87ef5319fa6b467-Paper-Conference.pdf) (as "Paper retrieval")**
> The action of searching for and selecting relevant academic papers related to a given research topic.

**[BioDiscoveryAgent: An AI Agent for Designing Genetic Perturbation Experiments](https://proceedings.iclr.cc/paper_files/paper/2025/file/4252dc94531833029000f85dc5fac792-Paper-Conference.pdf) (as "Literature search")**
> A tool-enabled action where the agent formulates search queries, uses an API to find relevant scientific papers, and summarizes them to inform its gene selection.

**[Fundamental Limitations on Subquadratic Alternatives to Transformers](https://proceedings.iclr.cc/paper_files/paper/2025/file/76012c39b10425b189c38850da053893-Paper-Conference.pdf) (as "Document similarity search")**
> Selecting the most similar or least similar pair of documents from a set based on their embeddings.

**[LongRoPE2: Near-Lossless LLM Context Window Scaling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shang25a/shang25a.pdf) (as "Argumentative retrieval")**
> The task of retrieving text segments based on their argumentative content or stance.

**[Nemotron-CORTEXA: Enhancing LLM Agents for Software Engineering Tasks via Improved Localization and Solution Diversity](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sohrabizadeh25a/sohrabizadeh25a.pdf) (as "File retrieval")**
> The process of identifying and retrieving source code files most relevant to a given software issue from a large codebase.

**[Retrieval-Augmented Perception: High-resolution Image Perception Meets Visual RAG](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25at/wang25at.pdf) (as "Image crop retrieval")**
> Selecting and retrieving image regions most relevant to a query based on similarity scoring between the query and image crops.

**[DocKS-RAG: Optimizing Document-Level Relation Extraction through LLM-Enhanced Hybrid Prompt Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25am/xu25am.pdf) (as "Sentence retrieval")**
> Identifying and retrieving top-k sentences from a document that are semantically similar to a query to enrich contextual understanding.

**[MixLoRA-DSI: Dynamically Expandable Mixture-of-LoRA Experts for Rehearsal-Free Generative Retrieval over Dynamic Corpora](https://aclanthology.org/2025.emnlp-main.20.pdf) (as "Generative retrieval")**
> The task of using a generative model to directly produce document identifiers in response to a query, treating information retrieval as a sequence-to-sequence problem.

**[Enhancing LLM Text Detection with Retrieved Contexts and Logits Distribution Consistency](https://aclanthology.org/2025.emnlp-main.503.pdf) (as "Text retrieval")**
> The task of finding and returning relevant documents or passages from a large corpus based on a given query text.

**[MoLoRAG: Bootstrapping Document Understanding via Multi-modal Logic-aware Retrieval](https://aclanthology.org/2025.emnlp-main.708.pdf) (as "Page retrieval")**
> Selecting a subset of document pages most relevant to a given question for downstream processing.

**[Vision-Free Retrieval: Rethinking Multimodal Search with Textual Scene Descriptions](https://aclanthology.org/2025.emnlp-main.709.pdf) (as "Short caption retrieval")**
> A retrieval task where the textual queries are concise, often ungrammatical phrases or keywords, mimicking real-world user search behavior.

**[Vision-Free Retrieval: Rethinking Multimodal Search with Textual Scene Descriptions](https://aclanthology.org/2025.emnlp-main.709.pdf) (as "Long caption retrieval")**
> A retrieval task where the textual queries are lengthy, descriptive, paragraph-level sentences.

**[IL-PCSR: Legal Corpus for Prior Case and Statute Retrieval](https://aclanthology.org/2025.emnlp-main.738.pdf) (as "Statute retrieval")**
> The observable task of identifying and ranking relevant legal statutes (sections/articles of law) applicable to a given legal case judgment.

**[IL-PCSR: Legal Corpus for Prior Case and Statute Retrieval](https://aclanthology.org/2025.emnlp-main.738.pdf) (as "Prior case retrieval")**
> Given a query case, ranking prior cases or precedents that should be cited by that case.

**[Evaluating the Effectiveness and Scalability of LLM-Based Data Augmentation for Retrieval](https://aclanthology.org/2025.emnlp-main.888.pdf) (as "Argument retrieval")**
> A retrieval task that involves finding documents or passages containing arguments relevant to a specific topic or stance.

**[From Automation to Autonomy: A Survey on Large Language Models in Scientific Discovery](https://aclanthology.org/2025.emnlp-main.895.pdf) (as "Literature retrieval")**
> Automatically searching and retrieving relevant scientific literature based on research queries or objectives.

**[Retrieval-augmented GUI Agents with Generative Guidelines](https://aclanthology.org/2025.emnlp-main.902.pdf) (as "Tutorial retrieval")**
> Fetching potentially relevant web tutorials using the task description as a query, forming the basis for subsequent guidance generation.

**[Measuring Risk of Bias in Biomedical Reports: The RoBBR Benchmark](https://aclanthology.org/2025.emnlp-main.160.pdf) (as "Support sentence retrieval")**
> The observable behavior of identifying and outputting specific sentences from a biomedical paper that provide evidence for a risk-of-bias assessment.

**[JUREX-4E: Juridical Expert-Annotated Four-Element Knowledge Base for Legal Reasoning](https://aclanthology.org/2025.emnlp-main.188.pdf) (as "Legal case retrieval")**
> The task of identifying and ranking relevant legal cases from a large corpus in response to a query case.

**[KoBLEX: Open Legal Question Answering with Multi-hop Reasoning](https://aclanthology.org/2025.emnlp-main.200.pdf) (as "Provision retrieval")**
> Identifying and retrieving relevant statutory provisions from a legal corpus in response to a legal question, as part of a retrieval-augmented reasoning pipeline.

**[Weaver: Interweaving SQL and LLM for Table Reasoning](https://aclanthology.org/2025.emnlp-main.1436.pdf) (as "Structured data retrieval")**
> Performing SQL operations such as filtering, joining, aggregating, and grouping on tabular data to extract relevant information.

**[Real-time Ad Retrieval via LLM-generative Commercial Intention for Sponsored Search Advertising](https://aclanthology.org/2025.emnlp-main.1473.pdf) (as "Ad retrieval")**
> The process of selecting and returning relevant advertisements from a large corpus in response to a user query.

**[SAKI-RAG: Mitigating Context Fragmentation in Long-Document RAG via Sentence-level Attention Knowledge Integration](https://aclanthology.org/2025.emnlp-main.63.pdf) (as "Cross-paragraph retrieval")**
> The task of identifying and retrieving relevant information that is distributed across multiple paragraphs within a long document.

**[Investigating Pedagogical Teacher and Student LLM Agents: Genetic Adaptation Meets Retrieval-Augmented Generation Across Learning Styles](https://aclanthology.org/2025.emnlp-main.675.pdf) (as "Multi-step retrieval")**
> The process of retrieving information from a knowledge base in a series of discrete steps, where each step corresponds to a part of a larger reasoning plan.

**[Efficient Context Selection for Long-ContextQA: No Tuning, No Iteration, Just Adaptive‐k](https://aclanthology.org/2025.emnlp-main.1017.pdf) (as "Context retrieval")**
> Selecting and returning a subset of relevant documents or passages from a large corpus based on query similarity.

**[LimRank: Less is More for Reasoning-Intensive Information Reranking](https://aclanthology.org/2025.emnlp-main.1041.pdf) (as "Scientific literature search")**
> Retrieving relevant papers from a scientific literature corpus for natural-language queries.

**[GRIT: Guided Relational Integration for Efficient Multi-Table Understanding](https://aclanthology.org/2025.emnlp-main.1118.pdf) (as "Table-column retrieval")**
> The task of identifying and returning the specific tables and columns from a database that are relevant to answering a given natural language query.

**[Assay2Mol: Large Language Model-based Drug Design Using BioAssay Context](https://aclanthology.org/2025.emnlp-main.1390.pdf) (as "BioAssay retrieval")**
> Identifying and retrieving relevant biochemical screening records from PubChem based on textual similarity between a query protein description and assay metadata.

**[TALON: A Multi-Agent Framework for Long-Table Exploration and Question Answering](https://aclanthology.org/2025.emnlp-main.1393.pdf) (as "Content retrieval")**
> The behavior of locating and extracting specific rows, columns, or cell values from a table that are relevant to a given query.

**[TableEval: A Real-World Benchmark for Complex, Multilingual, and Multi-Structured Table Question Answering](https://aclanthology.org/2025.emnlp-main.363.pdf) (as "Simple lookup")**
> A basic form of information retrieval that involves finding a direct fact or value in a table.

**[Conan-Embedding-v2: Training an LLM from Scratch for Text Embeddings](https://aclanthology.org/2025.emnlp-main.758.pdf) (as "Cross-lingual retrieval")**
> Retrieving relevant documents in one language (e.g., English) in response to a query in another language, based on aligned multilingual embeddings.

**[Program of Thoughts for Financial Reasoning: Leveraging Dynamic In-Context Examples and Generative Retrieval](https://aclanthology.org/2025.emnlp-main.1577.pdf) (as "Relevant fact extraction")**
> The observable task of identifying and retrieving specific pieces of information from a larger context of text and tables that are necessary to answer a given question.

**[Text2Vis: A Challenging and Diverse Benchmark for Generating Multimodal Visualizations from Text](https://aclanthology.org/2025.emnlp-main.1622.pdf) (as "Web data retrieval")**
> Locating and retrieving external data from the web before generating visualizations, in response to queries that do not provide complete data tables.

**[LinkAlign: Scalable Schema Linking for Real-World Large-Scale Multi-Database Text-to-SQL](https://aclanthology.org/2025.emnlp-main.51.pdf) (as "Database retrieval")**
> The observable process of selecting the correct target database from a large pool of candidate databases based on a natural language query.

**[SportReason: Evaluating Retrieval-Augmented Reasoning across Tables and Text for Sports Question Answering](https://aclanthology.org/2025.emnlp-main.34.pdf) (as "Iterative retrieval")**
> The process of generating multiple search queries in sequence, retrieving evidence at each step, and using the results to inform subsequent queries, as implemented in agentic RAG systems.

**[LeTS: Learning to Think-and-Search via Process-and-Outcome Reward Hybridization](https://aclanthology.org/2025.emnlp-main.257.pdf) (as "Think-and-search")**
> The observable behavior of an LLM alternating between internal reasoning (thinking) and external knowledge retrieval (searching) across multiple steps to answer complex queries.

**[Search-o1: Agentic Search-Enhanced Large Reasoning Models](https://aclanthology.org/2025.emnlp-main.276.pdf) (as "Reasoning with retrieved documents")**
> The behavior of incorporating retrieved external knowledge into the ongoing reasoning chain to support accurate problem solving.

**[Re-Align: Aligning Vision Language Models via Retrieval-Augmented Direct Preference Optimization](https://aclanthology.org/2025.emnlp-main.121.pdf) (as "Image retrieval")**
> Finding semantically similar images from a database based on visual content of a query image.

**[LMR-BENCH: Evaluating LLM Agent's Ability on Reproducing Language Modeling Research](https://aclanthology.org/2025.emnlp-main.314.pdf) (as "Cross-file retrieval")**
> Locating and utilizing relevant code, constants, or class definitions from files other than the one being modified, to ensure correct implementation.

**[Beyond Seen Data: Improving KBQA Generalization Through Schema-Guided Logical Form Generation](https://aclanthology.org/2025.emnlp-main.442.pdf) (as "Entity retrieval")**
> Identifying and retrieving candidate entities from a knowledge base that correspond to mentions in a natural language question.

**[Beyond Seen Data: Improving KBQA Generalization Through Schema-Guided Logical Form Generation](https://aclanthology.org/2025.emnlp-main.442.pdf) (as "Relation retrieval")**
> The process of identifying and retrieving relations from a knowledge base that are semantically relevant to a given question.

**[RJE: A Retrieval-Judgment-Exploration Framework for Efficient Knowledge Graph Question Answering with LLMs](https://aclanthology.org/2025.emnlp-main.873.pdf) (as "Reasoning path retrieval")**
> Extracting sequences of relations and entities from a knowledge graph that are semantically relevant to a natural language question.

**[ExpandR: Teaching Dense Retrievers Beyond Queries with LLM Guidance](https://aclanthology.org/2025.emnlp-main.963.pdf) (as "Dense retrieval")**
> The task of retrieving relevant documents from a collection by encoding queries and documents into a shared embedding space and finding the nearest neighbors.

**[LLaMP: Large Language Model Made Powerful for High-fidelity Materials Knowledge Retrieval](https://aclanthology.org/2025.emnlp-main.1280.pdf) (as "Material property retrieval")**
> The observable task of extracting specific physical or chemical properties of materials, such as bulk modulus, bandgap, or formation energy, from structured databases.

**[Improving Zero-shot Sentence Decontextualisation with Content Selection and Planning](https://aclanthology.org/2025.emnlp-main.1258.pdf) (as "Multi-hop evidence retrieval")**
> The task of retrieving secondary evidence based on an initial piece of information, used here to evaluate the utility of decontextualised sentences as intermediate reasoning steps.

**[Zero-shot Multimodal Document Retrieval via Cross-modal Question Generation](https://aclanthology.org/2025.emnlp-main.1324.pdf) (as "Multimodal document retrieval")**
> The task of identifying and returning the most relevant document pages, containing both text and images, from a large collection in response to a user's text query.

**[SERVAL: Surprisingly Effective Zero-Shot Visual Document Retrieval Powered by Large Vision and Language Models](https://aclanthology.org/2025.emnlp-main.1568.pdf) (as "Visual document retrieval")**
> Retrieving relevant documents from a collection given a text query over document images or their generated descriptions.

**[MMDocIR: Benchmarking Multimodal Retrieval for Long Documents](https://aclanthology.org/2025.emnlp-main.1576.pdf) (as "Cascade retrieval")**
> A two-stage retrieval process where page-level retrieval is performed first, followed by layout-level retrieval within the set of initially retrieved pages.

**[MMDocIR: Benchmarking Multimodal Retrieval for Long Documents](https://aclanthology.org/2025.emnlp-main.1576.pdf) (as "Layout-level retrieval")**
> The observable task of detecting and returning specific layout elements, such as paragraphs, figures, or tables, that contain the evidence for a user's query.

**[SERVAL: Surprisingly Effective Zero-Shot Visual Document Retrieval Powered by Large Vision and Language Models](https://aclanthology.org/2025.emnlp-main.1568.pdf) (as "Multilingual retrieval")**
> Retrieving relevant documents across multiple languages using queries and document collections in different languages.

**[STaRK: Benchmarking LLM Retrieval on Textual and Relational Knowledge Bases](https://proceedings.neurips.cc/paper_files/paper/2024/file/e607b1419e9ae7cd5cb5b5bb60c2ad5c-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Academic paper search")**
> The task of retrieving relevant academic papers from a bibliographic knowledge base based on a user's query about authors, topics, institutions, or citations.

**[NovelQA: Benchmarking Question Answering on Documents Exceeding 200K Tokens](https://proceedings.iclr.cc/paper_files/paper/2025/file/3adb85a348a18cdd74ce99fbbab20301-Paper-Conference.pdf) (as "Evidence recall")**
> The observable behavior of retrieving and presenting specific textual excerpts from a source document that support a given answer.

**[ImpliRet: Benchmarking the Implicit Fact Retrieval Challenge](https://aclanthology.org/2025.emnlp-main.1685.pdf) (as "Implicit fact retrieval")**
> The observable behavior of retrieving a document that contains implicitly stated information necessary to answer a query, requiring inference beyond surface-level lexical or semantic similarity.

**[TRANSIENTTABLES: Evaluating LLMs' Reasoning on Temporally Evolving Semi-structured Tables](https://aclanthology.org/2025.naacl-long.332.pdf) (as "Information Retrieval")**
> A two-stage evaluation method that assesses a model's ability to first retrieve relevant tables from a timeline and then generate answers based on them, isolating the retrieval component of temporal reasoning.

**[OmniKV: Dynamic Context Selection for Efficient Long-Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/da1131a86ac3c70e0b7cae89c3d4df22-Paper-Conference.pdf) (as "Number retrieval")**
> The task of accurately identifying and extracting a specific number from a long context.

**[KG-CQR: Leveraging Structured Relation Representations in Knowledge Graphs for Contextual Query Retrieval](https://aclanthology.org/2025.emnlp-main.824.pdf) (as "Subgraph extraction")**
> Identifying and retrieving a set of relevant knowledge graph triples that are semantically aligned with the input query, based on textual triplet representations.

**[LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Similar case identification")**
> Determining the most relevant case to a given query case from a list of candidates.

## Relationships

### Information retrieval →
- **BEIR** (measurements) — *measured_by*
  > “BEIR dataset [52] is a popular benchmark for evaluating dense retrievers’ zero-shot effectiveness”
  - [Enhancing LLM’s Cognition via Structurization](https://proceedings.neurips.cc/paper_files/paper/2024/file/f169ec4d47933ea4896b994af8ff4f17-Paper-Conference.pdf)
- **MTEB** (measurements) — *measured_by*
  > We evaluate 13 representative retrieval models, ranging from traditional bag-of-words models to large dense retrieval models, including the top performers from the retrieval set of the MTEB leaderboard (Muennighoff et al., 2023), BEIR (Thakur et al., 2021). (Section 4.1)
  - [BRIGHT: A Realistic and Challenging Benchmark for Reasoning-Intensive Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/7a0f8055c838df8e62329a76c7c6403d-Paper-Conference.pdf)
- **BM25** (measurements) — *measured_by*
  > “we advocate the BM25 for table retrieval tasks”
  - [OpenTab: Advancing Large Language Models as Open-domain Table Reasoners](https://proceedings.iclr.cc/paper_files/paper/2024/file/055ff1d86ca33e84c744cf8cca65ec8f-Paper-Conference.pdf)
- **Tool use** (behaviors tasks) — *causes*
  > Recently, the focus has shifted towards the use of retrievers to effectively support LLMs in the tool selection process (Section 1).
  - [PORTS: Preference-Optimized Retrievers for Tool Selection with Large Language Models](https://aclanthology.org/2025.emnlp-main.507.pdf)
- **MS MARCO** (measurements) — *measured_by*
  > To evaluate the model’s robustness in non-Wikipedia scenarios where high-quality text and titles are not available, we conduct experiments on a subset of MS MARCO [3]
  - [Self-Retrieval: End-to-End Information Retrieval with One Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/741ad162ab0f3da6f9aad60e9e34f5f1-Paper-Conference.pdf)
- **SlideVQA** (measurements) — *measured_by*
  > We first evaluate the retrieval accuracy of the Col-retrieval module within SV-RAG and compare it with several baselines on SlideVQA (Tanaka et al., 2023), MM-LongBench (Ma et al., 2024d), DUDE (Van Landeghem et al., 2023), DocVQA (Mathew et al., 2020; 2021) and VisR-Bench. (Section 5)
  - [SV-RAG: LoRA-Contextualizing Adaptation of  MLLMs for Long Document Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d40c7b4d78bf7f08ba532542818f6c0-Paper-Conference.pdf)
- **DPR** (measurements) — *measured_by*
  > “For table retrieval experiments, we conduct experiments to compare the performances of BM25 and DPR”
  - [OpenTab: Advancing Large Language Models as Open-domain Table Reasoners](https://proceedings.iclr.cc/paper_files/paper/2024/file/055ff1d86ca33e84c744cf8cca65ec8f-Paper-Conference.pdf)
- **Flickr30k Entities** (measurements) — *measured_by*
  > We further experiment on FLICKR30K ENTITIES [35], an image retrieval dataset of 30k images with annotated bounding boxes and descriptive phrases (Appendix A). (Section 5.2).
  - [AvaTaR: Optimizing LLM Agents for Tool Usage via Contrastive Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2db8ce969b000fe0b3fb172490c33ce8-Paper-Conference.pdf)
- **Natural Questions** (measurements) — *measured_by*
  > We conduct main experiments on Natural Questions (NQ) [21] and TriviaQA [18] datasets, both of which are widely used retrieval benchmarks... We use passage-level Hits@{1, 5} and Mean Reciprocal Rank (MRR)@5 as evaluation metrics.
  - [Self-Retrieval: End-to-End Information Retrieval with One Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/741ad162ab0f3da6f9aad60e9e34f5f1-Paper-Conference.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > We conduct main experiments on Natural Questions (NQ) [21] and TriviaQA [18] datasets, both of which are widely used retrieval benchmarks... We use passage-level Hits@{1, 5} and Mean Reciprocal Rank (MRR)@5 as evaluation metrics.
  - [Self-Retrieval: End-to-End Information Retrieval with One Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/741ad162ab0f3da6f9aad60e9e34f5f1-Paper-Conference.pdf)
- **Interpretability and explainability** (constructs) — *causes*
  > This approach also allows us to enhance explainability by returning the retrieved subgraph. (Section 5)
  - [G-Retriever: Retrieval-Augmented Generation for Textual Graph Understanding and Question Answering](https://proceedings.neurips.cc/paper_files/paper/2024/file/efaf1c9726648c8ba363a5c927440529-Paper-Conference.pdf)
- **BABILong** (measurements) — *measured_by*
  > "We experiment with two options: (1) retrieval by chunks of size 512 tokens, denoted RAG-C and (2) retrieval by sentences, called RAG-S."
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **LongBench** (measurements) — *measured_by*
  > EM-LLMS (surprise only) vs. RAG (NV-Embed-v2 retriever) vs. full-context, with LLaMA- 3.1-8B as the base LLM, evaluated on LongBench (Figure 1).
  - [Human-inspired Episodic Memory for Infinite Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/c05144b635df16ac9bbf8246bbbd55ca-Paper-Conference.pdf)
- **AIR-Bench (information retrieval)** (measurements) — *measured_by*
  > Additionally, it secured the highest scores in Long Doc section and the second scores in QA section on the AIR-Benchmark which covers a range of out-of-domain information retrieval topics beyond those in MTEB. (Section 1)
  - [NV-Embed: Improved Techniques for Training LLMs as Generalist Embedding Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4bf73386022473a652a18941e9ea6f8-Paper-Conference.pdf)
- **DocVQA** (measurements) — *measured_by*
  > We first evaluate the retrieval accuracy of the Col-retrieval module within SV-RAG and compare it with several baselines on SlideVQA (Tanaka et al., 2023), MM-LongBench (Ma et al., 2024d), DUDE (Van Landeghem et al., 2023), DocVQA (Mathew et al., 2020; 2021) and VisR-Bench. (Section 5)
  - [SV-RAG: LoRA-Contextualizing Adaptation of  MLLMs for Long Document Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d40c7b4d78bf7f08ba532542818f6c0-Paper-Conference.pdf)
- **SQuAD 2.0** (measurements) — *measured_by*
  > Document Retrieval In this task the model receives a query and Ndocs randomly assorted documents, and its objective is to return the id of the matching document. Our data is sampled from SQuAD v2 (Rajpurkar et al., 2018). (Section 5)
  - [DeciMamba: Exploring the Length Extrapolation Potential of Mamba](https://proceedings.iclr.cc/paper_files/paper/2025/file/fae0a4535196bf7715c1aef2ccfe283f-Paper-Conference.pdf)
- **Autoformalization** (behaviors tasks) — *causes*
  > RAutoformalizer uses the retrievals to enhance autoformalization.
  - [Rethinking and Improving Autoformalization: Towards a Faithful Metric and a Dependency Retrieval-based Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/d630537fc4402cfa3ebbc7450a0cac91-Paper-Conference.pdf)
- **InfiniteBench** (measurements) — *measured_by*
  > Table 3: NAMMs evaluation on InfiniteBench. Model/Task name Retrieval
  - [An Evolved Universal Transformer Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/da85790fb1cb4f11f431648455c561b5-Paper-Conference.pdf)
- **ToolBench** (measurements) — *measured_by*
  > Our experiments are based on ToolBench, a real-world tool benchmark containing more 16k tool collections... Our retrieval and end-to-end agent-tuning data are converted from the original data in ToolBench. (Section 4.1)
  - [ToolGen: Unified Tool Retrieval and Calling via Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b646bdebeb87dfafe2c6f77a63b564e1-Paper-Conference.pdf)
- **Contriever** (measurements) — *measured_by*
  > The results presented in Table 3 indicate that the revised documentation enhances the performance of tool retrieval methods, including the sparse retrieval method BM25 (Robertson et al., 2009) and the dense retrieval method Contriever (Izacard et al., 2021). (Section 3.3)
  - [From Exploration to Mastery: Enabling LLMs to Master Tools via Self-Driven Interactions](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c22e5e918198702765ecff4b20d0a90-Paper-Conference.pdf)
- **MuirBench** (measurements) — *measured_by*
  > [VISUAL RETRIEVAL] aims to evaluate the ability of models to retrieval images that contain the same building. (Section 3.1)
  - [MuirBench: A Comprehensive Benchmark for Robust Multi-image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/9cf6139382f98623d08cc595622f3fb1-Paper-Conference.pdf)
- **Multi-table reasoning** (constructs) — *causes*
  > This task is fundamental because in the real-world scenario, the subsequent steps of reasoning and answering performance are based on the quality of the retrieved tables.
  - [MMQA: Evaluating LLMs with Multi-Table Multi-Hop Complex Questions](https://proceedings.iclr.cc/paper_files/paper/2025/file/794a425a2e47e05d29d30f79b79a692d-Paper-Conference.pdf)
- **FLEURS-ASL** (measurements) — *measured_by*
  > FLEURS-ASL can be used to evaluate a variety of tasks—... in principle caption alignment, retrieval, and multiple-choice receptive comprehension (Section 1)
  - [FLEURS-ASL: Including American Sign Language in Massively Multilingual Multitask Evaluation](https://aclanthology.org/2025.naacl-long.314.pdf)
- **MP-DocVQA** (measurements) — *measured_by*
  > We employ question-document pairs from various VQA datasets, each targeting distinct document types: MP-DocVQA (Tito et al., 2023) for industrial documents, ArXivQA (Li et al., 2024), ChartQA (Masry et al., 2022), InfographicsVQA (Mathew et al., 2022), and PlotQA (Methani et al., 2020) for different types of figures, as well as SlideVQA (Tanaka et al., 2023) for presentation slides. (Section 3.1)
  - [Unveil: Unified Visual-Textual Integration and Distillation for Multi-modal Document Retrieval](https://aclanthology.org/2025.acl-long.1166.pdf)
- **ArXivQA** (measurements) — *measured_by*
  > We employ question-document pairs from various VQA datasets, each targeting distinct document types: MP-DocVQA (Tito et al., 2023) for industrial documents, ArXivQA (Li et al., 2024), ChartQA (Masry et al., 2022), InfographicsVQA (Mathew et al., 2022), and PlotQA (Methani et al., 2020) for different types of figures, as well as SlideVQA (Tanaka et al., 2023) for presentation slides. (Section 3.1)
  - [Unveil: Unified Visual-Textual Integration and Distillation for Multi-modal Document Retrieval](https://aclanthology.org/2025.acl-long.1166.pdf)
- **ChartQA** (measurements) — *measured_by*
  > We employ question-document pairs from various VQA datasets, each targeting distinct document types: MP-DocVQA (Tito et al., 2023) for industrial documents, ArXivQA (Li et al., 2024), ChartQA (Masry et al., 2022), InfographicsVQA (Mathew et al., 2022), and PlotQA (Methani et al., 2020) for different types of figures, as well as SlideVQA (Tanaka et al., 2023) for presentation slides. (Section 3.1)
  - [Unveil: Unified Visual-Textual Integration and Distillation for Multi-modal Document Retrieval](https://aclanthology.org/2025.acl-long.1166.pdf)
- **LOFT** (measurements) — *measured_by*
  > “LOFT (7 retrieval tasks including argumentative retrieval, fact-checking, web search, multi-hop reasoning QA, etc)”
  - [LongRoPE2: Near-Lossless LLM Context Window Scaling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shang25a/shang25a.pdf)
- **Needle-in-a-Haystack** (measurements) — *measured_by*
  > To investigate whether the LOGO training strategy affects the information retrieval capabilities of LCMs, we conduct a Needle-in-a-Haystack (NIAH) testing (gkamradt, 2023). (Section 4.2)
  - [LOGO — Long cOntext aliGnment via efficient preference Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tang25j/tang25j.pdf)
- **RULER** (measurements) — *measured_by*
  > RULER (Hsieh et al., 2024) is a suite of synthetically created tasks with controllable lengths, which ranges from retrieval, multi-hop tracking, real QA datasets, and context aggregation tasks. (Section 4.5)
  - [Speculative Prefill: Turbocharging TTFT with Lightweight and Training-Free Token Importance Estimation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25g/liu25g.pdf)
- **ViDoSeek** (measurements) — *measured_by*
  > Experimental results for the zero-shot closed-domain, multimodal document retrieval task on VidoSeek (Wang et al., 2025) and REAL-MM-RAG (Wasserman et al., 2025) (Table 1).
  - [Zero-shot Multimodal Document Retrieval via Cross-modal Question Generation](https://aclanthology.org/2025.emnlp-main.1324.pdf)
- **Real-MM-RAG** (measurements) — *measured_by*
  > Experimental results for the zero-shot closed-domain, multimodal document retrieval task on VidoSeek (Wang et al., 2025) and REAL-MM-RAG (Wasserman et al., 2025) (Table 1).
  - [Zero-shot Multimodal Document Retrieval via Cross-modal Question Generation](https://aclanthology.org/2025.emnlp-main.1324.pdf)
- **SQuAD v1.1** (measurements) — *measured_by*
  > Experimental results across four datasets—Dragonball, SQUAD, NFCORPUS, and SCI-DOCS demonstrate that SAKI-RAG achieves better recall and precision compared to other RAG frameworks in long-document retrieval scenarios (Abstract).
  - [SAKI-RAG: Mitigating Context Fragmentation in Long-Document RAG via Sentence-level Attention Knowledge Integration](https://aclanthology.org/2025.emnlp-main.63.pdf)
- **NFCorpus** (measurements) — *measured_by*
  > Experimental results across four datasets—Dragonball, SQUAD, NFCORPUS, and SCI-DOCS demonstrate that SAKI-RAG achieves better recall and precision compared to other RAG frameworks in long-document retrieval scenarios (Abstract).
  - [SAKI-RAG: Mitigating Context Fragmentation in Long-Document RAG via Sentence-level Attention Knowledge Integration](https://aclanthology.org/2025.emnlp-main.63.pdf)
- **Cross-lingual alignment** (constructs) — *causes*
  > we propose a cross-lingual retrieval dataset (CLR), which integrates representations across different languages through cross-lingual search, thereby narrowing the representation gap between them. (Section 3.3)
  - [Conan-Embedding-v2: Training an LLM from Scratch for Text Embeddings](https://aclanthology.org/2025.emnlp-main.758.pdf)
- **IMPLIRET** (measurements) — *measured_by*
  > IMPLIRET: Benchmarking the Implicit Fact Retrieval Challenge (Title).
  - [ImpliRet: Benchmarking the Implicit Fact Retrieval Challenge](https://aclanthology.org/2025.emnlp-main.1685.pdf)
- **Factual grounding** (constructs) — *causes*
  > Additionally, our reconstruction strategy uses retrieval-augmented generation to enhance factual grounding and reduce hallucination. (Limitations)
  - [Uncovering Argumentative Flow: A Question-Focus Discourse Structuring Framework](https://aclanthology.org/2025.emnlp-main.416.pdf)
- **MKQA** (measurements) — *measured_by*
  > “To evaluate cross-lingual retrieval performance, we conducted comprehensive experiments using the Multilingual Knowledge Questions & Answers (MKQA) benchmark”
  - [Conan-Embedding-v2: Training an LLM from Scratch for Text Embeddings](https://aclanthology.org/2025.emnlp-main.758.pdf)
- **MLDR** (measurements) — *measured_by*
  > Following Warner et al. (2024), we evaluate long-context performance using the English subset of MLDR (Chen et al., 2024), a retrieval benchmark consisting of over 200,000 long documents. (Section 5.5)
  - [Context-aware Biases for Length Extrapolation](https://aclanthology.org/2025.emnlp-main.1545.pdf)
- **TableEval** (measurements) — *measured_by*
  > This approach accommodates various task types within diverse real-world industrial scenarios, including information retrieval, numerical analysis, table reasoning, data analysis, multi-turn dialogue, and understanding of table structures. (Section 3.1)
  - [TableEval: A Real-World Benchmark for Complex, Multilingual, and Multi-Structured Table Question Answering](https://aclanthology.org/2025.emnlp-main.363.pdf)
- **MIRACL** (measurements) — *measured_by*
  > Recent efforts include the development of multilingual and cross-lingual IR resources, such as Mr. TyDi (Zhang et al., 2021), MIRACL (Zhang et al., 2023) and CIRAL (Adeyemi et al., 2024)... (Section 4.3)
  - [Charting the Landscape of African NLP: Mapping Progress and Shaping the Road Ahead](https://aclanthology.org/2025.emnlp-main.1414.pdf)

### → Information retrieval
- **Query rewriting** (behaviors tasks) — *causes*
  > We find that using this rephrased query in retrieval drastically boosts the aesthetic quality more than we ever expected.
  - [Aligning Vision Models with Human Aesthetics in Retrieval: Benchmarks and Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/9d3faa41886997cfc2128b930077fa49-Paper-Conference.pdf)
- **Question decomposition** (behaviors tasks) — *causes*
  > QD provides noticeable improvements over MTR on multi-table retrieval tasks, for instance, in Top-2 retrieval, precision is improved from 65.3 to 72.3 and recall is improved from 62.3 to 64.7 in the 2-table subset. (Section 4.2)
  - [MMQA: Evaluating LLMs with Multi-Table Multi-Hop Complex Questions](https://proceedings.iclr.cc/paper_files/paper/2025/file/794a425a2e47e05d29d30f79b79a692d-Paper-Conference.pdf)
- **Semantic understanding** (constructs) — *causes*
  > To build semantic index for files in the LSFS, we leverage an a lightweight embedding model, i.e., all-MiniLM-L6-v2 (Reimers & Gurevych, 2019), commonly used in vector databases, thereby supporting more advanced file operations which requires semantic understanding of file content. (Section 3)
  - [From Commands to Prompts: LLM-based Semantic File System for AIOS](https://proceedings.iclr.cc/paper_files/paper/2025/file/517eb19e99947f60afff0cf93e451825-Paper-Conference.pdf)
- **Relevance** (constructs) — *causes*
  > By explicitly modeling both consistency and relevance, our method trains a retriever to retrieve the documents necessary for answering a given question. (Section 3.2)
  - [ReSCORE: Label-free Iterative Retriever Training for Multi-hop Question Answering with Relevance-Consistency Supervision](https://aclanthology.org/2025.acl-long.16.pdf)
- **Consistency** (constructs) — *causes*
  > By explicitly modeling both consistency and relevance, our method trains a retriever to retrieve the documents necessary for answering a given question. (Section 3.2)
  - [ReSCORE: Label-free Iterative Retriever Training for Multi-hop Question Answering with Relevance-Consistency Supervision](https://aclanthology.org/2025.acl-long.16.pdf)
- **Query expansion** (behaviors tasks) — *causes*
  > To enhance this retrieval phase, current query expansion (QE) techniques leverage pre-trained language models (PLM) to mitigate word mismatches and improve the recall of relevant documents. (Abstract)
  - [Not All Terms Matter: Recall-Oriented Adaptive Learning for PLM-aided Query Expansion in Open-Domain Question Answering](https://aclanthology.org/2025.acl-long.1076.pdf)
- **Answer generation** (behaviors tasks) — *correlates*
  > While the correlation is not very strong (up to r = 0.42), it confirms that with increased retrieval performance, the generation improves (Salemi and Zamani, 2024).
  - [PeerQA: A Scientific Question Answering Dataset from Peer Reviews](https://aclanthology.org/2025.naacl-long.22.pdf)
- **Relation extraction** (behaviors tasks) — *causes*
  > KiRAG decomposes documents into knowledge triples and performs iterative retrieval with these triples to enable a factually reliable retrieval process. (Abstract)
  - [KiRAG: Knowledge-Driven Iterative Retriever for Enhancing Retrieval-Augmented Generation](https://aclanthology.org/2025.acl-long.929.pdf)

### Associated with
- **Fact checking** (behaviors tasks)
  > Most recent works typically divide the fact verification task into two stages. The first stage retrieves a relatively small subset of evidence from a knowledge source (e.g. a knowledge graph) that is relevant to verify a given claim. (Section 2)
  - [Unsupervised Pretraining for Fact Verification by Language Model Distillation](https://proceedings.iclr.cc/paper_files/paper/2024/file/238c98450b1d9e8055f94d22f303bb57-Paper-Conference.pdf)
- **Memory management** (constructs)
  > “Memory management involves integrating and analyzing content from internal memory” and “Memory Retriever. Given the question q and the assistant’s memory M, the memory retriever retrieves historically relevant memories”
  - [Boosting the Potential of Large Language Models with an Intelligent Information Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/28d38c036365420f61ce03300418e44a-Paper-Conference.pdf)
- **Factual recall** (behaviors tasks)
  > The two-stage theory states that the process of memory recall begins with a search and retrieval process, and then a decision or recognition process where the correct information is chosen from what has been retrieved (Bahrick, 1970; Watkins and Gardiner, 1979). (Section 2.1)
  - [MADial-Bench: Towards Real-world Evaluation of Memory-Augmented Dialogue Generation](https://aclanthology.org/2025.naacl-long.499.pdf)
- **Temporal grounding** (behaviors tasks)
  > Temporal Grounding. Accurately identify and retrieve/extract the relevant set of tables necessary to answer the question. This can be regarded as retrieval over temporal information.
  - [TRANSIENTTABLES: Evaluating LLMs' Reasoning on Temporally Evolving Semi-structured Tables](https://aclanthology.org/2025.naacl-long.332.pdf)
- **Schema linking** (behaviors tasks)
  > Through error analysis, we identify two major challenges in schema linking: (1) Database Retrieval: accurately selecting the target database from a large schema pool, while effectively filtering out irrelevant ones
  - [LinkAlign: Scalable Schema Linking for Real-World Large-Scale Multi-Database Text-to-SQL](https://aclanthology.org/2025.emnlp-main.51.pdf)
- **Task decomposition** (behaviors tasks)
  > "we decompose the retrieval into three sub-processes, including problem decomposition, single-constraint resolution, and context merging."
  - [DRoC: Elevating Large Language Models for Complex Vehicle Routing via Decomposed Retrieval of Constraints](https://proceedings.iclr.cc/paper_files/paper/2025/file/73d6c3e4b214deebbbf8256e26d2cf45-Paper-Conference.pdf)
- **Named entity recognition** (behaviors tasks)
  > Information Retrieval. Effective search functionality is essential in SNS. Models should interpret query intent and retrieve relevant information from large datasets, delivering the most accurate results. Tasks: (3) Note-NER. Extracts named entities from note content.
  - [SNS-Bench: Defining, Building, and Assessing Capabilities of Large Language Models in Social Networking Services](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guo25o/guo25o.pdf)
