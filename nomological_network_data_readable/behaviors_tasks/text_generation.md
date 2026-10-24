# Text generation
**Type:** Behavior  
**Referenced in:** 602 papers  
**Also known as:** Response generation, Open-ended generation, Writing, Natural language generation, Completion generation, Free-form response generation, Language generation, Sequence generation, Single-turn dialogue generation, Autoregressive generation, Instruction response generation, Single-turn dialogue, Content generation, Movie review generation, Text-to-text generation, Diary writing, Context completion, Single-turn conversation, Book review generation, Draft generation, Free generation, Token generation, Conversation simulation, Blog post writing, Email writing, Culture-conditioned generation, LaTeX document generation, Slogan generation, State description generation, Twitter post generation, Generative language modeling, Surface realization, Inference steering, Email completion, Chat response generation, Open-ended reasoning, Argumentative writing, Cover letter writing, Expository writing, Legal Document Writing, Speech drafting, Fictitious knowledge generation, Long structured output generation, Research paper generation, Arbitrary-length sequence generation, Unconditional generation, Document creation, Cognitive reappraisal generation, Concept-conditioned generation, Development document generation, Editing instruction generation, Random word generation, Token string generation, Verbal response generation, Watermark description generation, Paper writing, Guided generation, Token-by-token generation, Argument composition, Advice generation, Cover letter generation, Culturally appropriate response generation, Reference letter generation, Title generation, Video scriptwriting, Academic writing, Professional writing, Final response generation, Free-text response generation, Model generation, Natural language response generation, Open-ended response generation, Completion, Bidirectional text continuation, Free-text generation, Sentence generation, Human-content continuation, Essay generation, Smart reply generation, Generation, Free-form text completion, Free-form text generation, Free-form Text Generation, Open-ended text generation, Unconditional text generation, Open-response generation  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant framing is prompt- or context-conditioned production of natural-language sequences, usually as free-form answers, continuations, or completions. Many definitions emphasize coherent, contextually appropriate, fluent, or human-like outputs, while several make the mechanics explicit as sequential, often autoregressive, token generation from a prompt, prefix, or dialogue history. Most usages are open-ended, though some papers explicitly include constrained generation or unified text-to-text settings, and some narrow it to assistant-style response generation or single-turn dialogue.

**Variants.** Papers use many names for nearby variants, with the broadest recurring ones being response generation, open-ended generation, natural language generation, text completion, and single-turn dialogue generation. Beyond these broad labels, authors also study narrower writing and continuation settings, and multimodal settings where the model produces captions, answers, descriptions, or other text from interleaved text, image, or video inputs.

**Space of elicitation and scores.** Papers link it to 54 measurement instruments. The most frequently linked are WikiText-2, MT-Bench, E2E NLG Challenge, LLM-as-a-judge, and C4: WikiText-2 and C4 are often used for perplexity or language-modeling evaluation, MT-Bench for open-ended one-turn and two-turn outputs including writing, E2E NLG Challenge for natural language generation benchmarking, and LLM-as-a-judge for scoring open-ended outputs with systems such as GPT-4, GPT-4o, or Prometheus-2-8x7B. Other linked instruments include additional benchmark datasets and human evaluation.

**What it is taken as evidence of.** Across 19 linked constructs, papers do not converge on a single construct that this behavior reflects. The most common linkage is to text generation quality, and papers also frequently relate it to generation diversity, alignment, and coherence. A smaller line of work uses the behavior as part of measuring other constructs, while some papers instead claim causal relationships from constructs such as collaboration ability or human preference alignment to text generation.

## Sources

**[A Semantic Invariant Robust Watermark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf)**
> Producing coherent and contextually appropriate text sequences in response to input prompts, including both open-ended and constrained generation.

**[Aligning Large Language Models with Representation Editing: A Control Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/41bba7b0f5c81e789a20bb16a370aeeb-Paper-Conference.pdf) (as "Response generation")**
> Producing a natural-language answer or continuation to a user prompt in an assistant setting.

**[Spectral Editing of Activations for Large Language Model Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/684c59d614fe6ae74a3be8c3ef07e061-Paper-Conference.pdf) (as "Open-ended generation")**
> Producing free-form text responses to prompts or questions without choosing from fixed answer options.

**[LISA: Layerwise Importance Sampling for Memory-Efficient Large Language Model Fine-Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/687163285b8affc8ee933bdca8e75747-Paper-Conference.pdf) (as "Writing")**
> The observable task of generating coherent text content, categorized within MT-Bench.

**[Kernel Language Entropy: Fine-grained Uncertainty Quantification for LLMs from Semantic Similarities](https://proceedings.neurips.cc/paper_files/paper/2024/file/10c456d2160517581a234dfde15a7505-Paper-Conference.pdf) (as "Natural language generation")**
> The general task of producing free-form text in a human language.

**[A Critical Evaluation of AI Feedback for Aligning Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/33870b3e099880cd8e705cd07173ac27-Paper-Conference.pdf) (as "Completion generation")**
> Producing a sequence of tokens as a response to an input dialogue history or instruction.

**[MMBench-Video: A Long-Form Multi-Shot Benchmark for Holistic Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a2326c9715a516c91174132e0170073a-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Free-form response generation")**
> The observable behavior of generating open-ended, natural language answers to questions, as opposed to selecting from a fixed set of options or producing a single word.

**[BiScope: AI-generated Text Detection by Checking Memorization of Preceding Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/bc808cf2d2444b0abcceca366b771389-Paper-Conference.pdf) (as "Text completion")**
> Generating the remainder of a text from a provided prefix, optionally conditioned on additional guidance.

**[Selective Generation for Controllable Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/5a6815122f533193a022cbc41786c1cc-Paper-Conference.pdf) (as "Language generation")**
> The task of producing a sequence of tokens, such as a sentence or paragraph, in response to an input prompt.

**[Ensemble Learning for Heterogeneous Large Language Models with Deep Parallel Collaboration](https://proceedings.neurips.cc/paper_files/paper/2024/file/d8a6eb79f8ccaacbe7198a5caf3a0323-Paper-Conference.pdf) (as "Free-form generation")**
> The task of generating an unconstrained natural language response to a prompt or question.

**[Imitating Language via Scalable Inverse Reinforcement Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5036c166e44b731f214f41813364d01-Paper-Conference.pdf) (as "Sequence generation")**
> The observable behavior of producing a complete sequence of tokens, such as a sentence or paragraph, in an autoregressive manner.

**[BoNBoN Alignment for Large Language Models and the Sweetness of Best-of-n Sampling](https://proceedings.neurips.cc/paper_files/paper/2024/file/056521a35eacd9d2127b66a7d3c499c5-Paper-Conference.pdf) (as "Single-turn dialogue generation")**
> The task of generating a single, coherent, and relevant response to a user's prompt in a conversational context.

**[MiniCache: KV Cache Compression in Depth Dimension for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fd0705710bf01b88a60a3d479ea341d9-Paper-Conference.pdf) (as "Autoregressive generation")**
> The process of generating text token by token, where each new token is predicted based on the sequence of previously generated tokens.

**[DHA: Learning Decoupled-Head Attention from Transformer Checkpoints via Adaptive Heads Fusion](https://proceedings.neurips.cc/paper_files/paper/2024/file/518a75257f37b32f711082dff33c2ffc-Paper-Conference.pdf) (as "Instruction response generation")**
> Generating responses to user instructions or prompts in an instruction-tuned dialogue setting.

**[Star-Agents: Automatic Data Optimization with LLM Agents for Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0852b88e96d973bd4e21b673f51621d0-Paper-Conference.pdf) (as "Single-turn dialogue")**
> Responding to a single user prompt or question in a self-contained manner without prior conversational context.

**[Addax: Utilizing Zeroth-Order Gradients to Improve Memory Efficiency and Performance of SGD for Fine-Tuning Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/03560f68b1238221e7c07ad01c4b47aa-Paper-Conference.pdf) (as "Content generation")**
> The observable task of producing new text based on a given prompt or context.

**[Joint Reward and Policy Learning with Demonstrations and Human Feedback Improves Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/0ad6ebd11593822b8a6d5873ca9c5b0b-Paper-Conference.pdf) (as "Movie review generation")**
> The specific task of generating text that constitutes a movie review, often with a specified sentiment.

**[LongGenBench: Benchmarking Long-Form Generation in Long Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/141304a37d59ec7f116f3535f1b74bde-Paper-Conference.pdf) (as "Diary writing")**
> The specific task of generating a sequence of dated entries that describe events over a period of time.

**[LiFT: Learning to Fine-Tune via Bayesian Parameter Efficient Meta Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/27e5626cabdbb6cd5c56ce4114ff93e4-Paper-Conference.pdf) (as "Text-to-text generation")**
> The task of generating a textual output based on a textual input, encompassing various NLP tasks in a unified format.

**[Speculative RAG: Enhancing Retrieval Augmented Generation through Drafting](https://proceedings.iclr.cc/paper_files/paper/2025/file/2ea06b52f613716e67458f5ab3fb7558-Paper-Conference.pdf) (as "Draft generation")**
> Producing candidate answers from a subset of retrieved documents before verification.

**[Broaden your SCOPE! Efficient Multi-turn Conversation Planning for LLMs with Semantic Space](https://proceedings.iclr.cc/paper_files/paper/2025/file/32e41d6b0a51a63a9a90697da19d235d-Paper-Conference.pdf) (as "Conversation simulation")**
> The act of generating plausible future turns of a conversation to evaluate the potential outcomes of different responses.

**[Aligning Language Models with Demonstrated Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/349a45f211fb1b3850da1ccd829e869e-Paper-Conference.pdf) (as "Email writing")**
> The observable task of generating the text for an email based on a given prompt or scenario.

**[Aligning Language Models with Demonstrated Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/349a45f211fb1b3850da1ccd829e869e-Paper-Conference.pdf) (as "Blog post writing")**
> The observable task of generating text in the style and format of a blog post.

**[CEB: Compositional Evaluation Benchmark for Fairness in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/38e491559eb9e4cf31b8cd3a4e222436-Paper-Conference.pdf) (as "Text continuation")**
> Generating the continuation of a given context, evaluating the model's ability to generate coherent text without introducing bias.

**[SqueezeAttention: 2D Management of KV-Cache in LLM Inference via Layer-wise Optimal Budget](https://proceedings.iclr.cc/paper_files/paper/2025/file/3b0a8df568ec496a717566a7f8158aaa-Paper-Conference.pdf) (as "Token generation")**
> The observable process of producing output tokens sequentially during the decoding phase of inference.

**[Is In-Context Learning Sufficient for Instruction Following in LLMs?](https://proceedings.iclr.cc/paper_files/paper/2025/file/41623b137cd34807f56028aa9f6f84a7-Paper-Conference.pdf) (as "Single-turn conversation")**
> An observable interaction where the model receives a single user query and generates a single response to complete the task.

**[Generative Monoculture in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5178b2f2d7c44aa390c0777dc77b3f0c-Paper-Conference.pdf) (as "Book review generation")**
> The observable task of producing text reviews for specific book titles, evaluated for sentiment, topic, and wording diversity.

**[HeadMap: Locating and Enhancing Knowledge Circuits in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/52fc02778520b240c57046b3f7588ba1-Paper-Conference.pdf) (as "Context completion")**
> The observable task of completing a given text prompt or context in a coherent and plausible manner.

**[A Percolation Model of Emergence: Analyzing Transformers Trained on a Formal Language](https://proceedings.iclr.cc/paper_files/paper/2025/file/5cd2b0a6b7423af6369cbdbbb228e8d0-Paper-Conference.pdf) (as "Free generation")**
> The task of producing a valid string from the formal language that respects both grammar and type constraints, without any specific input prompt.

**[Sparse Learning for State Space Models on Mobile](https://proceedings.iclr.cc/paper_files/paper/2025/file/adf7fa39d65e2983d724ff7da57f00ac-Paper-Conference.pdf) (as "Generative language modeling")**
> The observable task of producing coherent and contextually relevant text following an initial prompt.

**[Flow: Modularized Agentic Workflow Automation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ba84da6921f3040b74ee163aa7451f53-Paper-Conference.pdf) (as "LaTeX document generation")**
> The specific task of creating a compilable LaTeX document, such as a Beamer presentation, based on content and formatting requirements.

**[3D-Properties: Identifying Challenges in DPO and Charting a Path Forward](https://proceedings.iclr.cc/paper_files/paper/2025/file/c080f9fb3658511bc4f063c5794ef706-Paper-Conference.pdf) (as "Slogan generation")**
> The task of creating a concise and impactful slogan based on a prompt, often with constraints on word count and content.

**[CodePlan: Unlocking Reasoning Potential in Large Language Models by Scaling Code-form Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c362b360765ed90ae4bd9c6764837e0e-Paper-Conference.pdf) (as "Surface realization")**
> The process of translating a high-level plan, such as pseudocode, into a detailed, final natural language response.

**[Uncovering Gaps in How Humans and LLMs Interpret Subjective Language](https://proceedings.iclr.cc/paper_files/paper/2025/file/c362fbc0d182c6b4b8dadb90177239e4-Paper-Conference.pdf) (as "Inference steering")**
> The observable task of generating an output that is shaped by a subjective phrase included directly in the user's prompt.

**[Attributing Culture-Conditioned Generations to Pretraining Corpora](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4546b4f9e1a44ed15c253dd43307dd5-Paper-Conference.pdf) (as "Culture-conditioned generation")**
> Producing open-ended text (e.g., narrative, dialogue) conditioned on a specific cultural context.

**[LLaVA-Interleave: Tackling Multi-image, Video, and 3D in Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c9f95e9ec39fa5ad3d0a562b993b92aa-Paper-Conference.pdf) (as "Twitter post generation")**
> Writing a social-media style post that describes the content of an image or video.

**[Language Guided Skill Discovery](https://proceedings.iclr.cc/paper_files/paper/2025/file/dae30ba63ca043588cdf804bbba295ed-Paper-Conference.pdf) (as "State description generation")**
> The observable action of an LLM producing a natural language description for a given agent state, based on a user-provided prompt.

**[SaMer: A Scenario-aware Multi-dimensional Evaluator for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/646ca7b994bc46afe33d680dbe7ed67a-Paper-Conference.pdf) (as "Legal Document Writing")**
> The observable behavior of generating formal text adhering to legal standards and logical structures.

**[KBLaM: Knowledge Base augmented Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/803485352e61e3ebf41221e4776c9fd4-Paper-Conference.pdf) (as "Open-ended reasoning")**
> The observable task of responding to a query that requires generating a more elaborate or inferential answer beyond simple fact retrieval.

**[Measuring Non-Adversarial Reproduction of Training Data in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/861777345d8b03ec648e768cd54f1c42-Paper-Conference.pdf) (as "Expository writing")**
> The task of generating text that explains, informs, or describes facts, such as tutorials, encyclopedia entries, or news articles.

**[Measuring Non-Adversarial Reproduction of Training Data in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/861777345d8b03ec648e768cd54f1c42-Paper-Conference.pdf) (as "Argumentative writing")**
> Generating text to compare views, judge, or persuade, such as movie reviews or essays.

**[Proactive Privacy Amnesia for Large Language Models: Safeguarding PII with Negligible Impact on Model Utility](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c234d9c7e738a793947e0282c36eb95-Paper-Conference.pdf) (as "Email completion")**
> The task of generating coherent and contextually appropriate continuations for a given email prompt, used to measure model utility.

**[First-Person Fairness in Chatbots](https://proceedings.iclr.cc/paper_files/paper/2025/file/92af0c8c2664429de2bb44c2692d84ae-Paper-Conference.pdf) (as "Cover letter writing")**
> Generating a cover letter for a user as part of employment-related assistance.

**[Preserving Diversity in Supervised Fine-Tuning of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a548ef984f30bca3abdc09f43743827f-Paper-Conference.pdf) (as "Chat response generation")**
> Producing answers to conversational prompts, often evaluated by sampling multiple candidate replies.

**[AI as Humanity’s Salieri: Quantifying Linguistic Creativity of Language Models via Systematic Attribution of Machine Text against Web Text](https://proceedings.iclr.cc/paper_files/paper/2025/file/e304d374c85e385eb217ed4a025b6b63-Paper-Conference.pdf) (as "Speech drafting")**
> The task of generating the text for a speech, often prompted with an initial sentence from a famous historical speech.

**[On Large Language Model Continual Unlearning](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc28053a08f59fccb48b11f2e31e81c7-Paper-Conference.pdf) (as "Fictitious knowledge generation")**
> The task of generating responses based on synthetic, non-factual information about fictional entities.

**[CycleResearcher: Improving Automated Research via Automated Review](https://proceedings.iclr.cc/paper_files/paper/2025/file/0a48036026dc7946ef6033ae14719cc5-Paper-Conference.pdf) (as "Research paper generation")**
> The observable task of producing a complete academic paper in a structured format, including sections like abstract, introduction, methods, and results.

**[Are Large Vision Language Models Good Game Players?](https://proceedings.iclr.cc/paper_files/paper/2025/file/27881a19f100fdbf57f0ba1c3d499b08-Paper-Conference.pdf) (as "Long structured output generation")**
> Producing extended structured responses such as matrices or move sequences without format breakdowns.

**[Block Diffusion: Interpolating Between Autoregressive and Diffusion Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7ede97c3e082c6df10a8d6103a2eebd2-Paper-Conference.pdf) (as "Arbitrary-length sequence generation")**
> Generating text sequences whose length can continue until an end-of-sequence token or degradation criterion is reached.

**[Scaling Diffusion Language Models via Adaptation from Autoregressive Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0fa81c3f0d57f95b8776de3a248ef0ed-Paper-Conference.pdf) (as "Unconditional generation")**
> Generating text without a conditioning prompt or task-specific input.

**[Hi Robot: Open-Ended Instruction Following with Hierarchical Vision-Language-Action Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shi25d/shi25d.pdf) (as "Verbal response generation")**
> Producing natural language utterances, such as confirmations or clarifications, in response to user prompts or during task execution.

**[WMarkGPT: Watermarked Image Understanding via Multimodal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25f/tan25f.pdf) (as "Watermark description generation")**
> The observable task of producing a natural language text that describes a watermark's characteristics, such as its location, content, appearance, and its interaction with the main image content.

**[Language Models over Canonical Byte-Pair Encodings](https://raw.githubusercontent.com/mlresearch/v267/main/assets/vieira25b/vieira25b.pdf) (as "Token string generation")**
> The autoregressive production of sequences of tokens by a language model, which may result in either canonical or noncanonical encodings of character strings.

**[AxBench: Steering LLMs? Even Simple Baselines Outperform Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25a/wu25a.pdf) (as "Concept-conditioned generation")**
> Generating text that is explicitly guided to include a specified concept or topic.

**[CollabLLM: From Passive Responders to Active Collaborators](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25i/wu25i.pdf) (as "Document creation")**
> The model helps produce or revise a written document across multiple turns, such as a blog post, creative writing piece, or personal statement.

**[ResearchTown: Simulator of Human Research Community](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25i/yu25i.pdf) (as "Paper writing")**
> Generating a paper-like research output from researcher and paper context in a structured format.

**[CAD-Editor: A Locate-then-Infill Framework with Automated Training Data Synthesis for Text-Based CAD Editing](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yuan25g/yuan25g.pdf) (as "Editing instruction generation")**
> Generating a textual instruction that summarizes the differences between paired CAD models.

**[SPRI: Aligning Large Language Models with Context-Situated Principles](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhan25a/zhan25a.pdf) (as "Cognitive reappraisal generation")**
> The task of generating text that reframes an emotionally charged situation to alter its emotional impact, a strategy used in psychology.

**[Hardware and Software Platform Inference](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25u/zhang25u.pdf) (as "Random word generation")**
> The task of producing a sequence of random words as prompted by a user, used to generate diverse logit distributions for analysis.

**[Synthesizing Software Engineering Data in a Test-Driven Manner](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cn/zhang25cn.pdf) (as "Development document generation")**
> Using an LLM to generate detailed task descriptions or requirement documents from unit test content.

**[Large Language Models to Diffusion Finetuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cetin25a/cetin25a.pdf) (as "Guided generation")**
> Conditioning output generation on external task-specific signals to improve performance in targeted domains.

**[LaCache: Ladder-Shaped KV Caching for Efficient Long-Context Modeling of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shi25b/shi25b.pdf) (as "Token-by-token generation")**
> Autoregressive production of text one token at a time, used in standard language modeling evaluation settings.

**[Position: Beyond Assistance – Reimagining LLMs as Ethical and Adaptive Co-Creators in Mental Health Care](https://raw.githubusercontent.com/mlresearch/v267/main/assets/badawi25a/badawi25a.pdf) (as "Culturally appropriate response generation")**
> Generating mental health responses that respect and reflect the user's cultural background, avoiding stereotypes and offering relevant, non-biased advice.

**[Position: Rethinking LLM Bias Probing Using Lessons from the Social Sciences](https://raw.githubusercontent.com/mlresearch/v267/main/assets/morehouse25a/morehouse25a.pdf) (as "Cover letter generation")**
> Writing a professional cover letter for a job applicant, used to assess whether the quality of writing varies by the applicant's gender.

**[Position: Rethinking LLM Bias Probing Using Lessons from the Social Sciences](https://raw.githubusercontent.com/mlresearch/v267/main/assets/morehouse25a/morehouse25a.pdf) (as "Reference letter generation")**
> Writing a recommendation letter for a student or job candidate, used to evaluate whether the strength of endorsement varies by gender.

**[Position: Societal Impacts Research Requires Benchmarks for Creative Composition Tasks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25r/shen25r.pdf) (as "Professional writing")**
> Creating formal documents such as resumes, cover letters, performance reviews, and job descriptions that influence professional evaluation and opportunity allocation.

**[Position: Societal Impacts Research Requires Benchmarks for Creative Composition Tasks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25r/shen25r.pdf) (as "Argument composition")**
> Constructing persuasive or critical analyses, such as essay outlines, hypothetical answers, or debate points.

**[Position: Societal Impacts Research Requires Benchmarks for Creative Composition Tasks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25r/shen25r.pdf) (as "Academic writing")**
> The task of generating content for educational or research purposes, such as explanations, study plans, literature reviews, and informational articles.

**[Position: Societal Impacts Research Requires Benchmarks for Creative Composition Tasks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25r/shen25r.pdf) (as "Advice generation")**
> Producing guidance or recommendations in response to personal or situational queries, such as life advice or problem-solving suggestions.

**[Position: Societal Impacts Research Requires Benchmarks for Creative Composition Tasks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25r/shen25r.pdf) (as "Title generation")**
> Producing short, creative textual elements such as product names, hashtags, slogans, or article headings.

**[Position: AI Scaling: From Up to Down and Out](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25fh/wang25fh.pdf) (as "Video scriptwriting")**
> Generating narrative or instructional scripts for video content based on creative or contextual prompts.

**[ActionStudio: A Lightweight Framework for Data and Training of Large Action Models](https://aclanthology.org/2025.emnlp-main.1090.pdf) (as "Free-text response generation")**
> Producing natural language responses that are contextually appropriate and accurate in agent interactions, particularly in business or CRM settings.

**[Learning to Ask: When LLM Agents Meet Unclear Instruction](https://aclanthology.org/2025.emnlp-main.1104.pdf) (as "Final response generation")**
> The act of producing the concluding answer or output for the user after completing all necessary intermediate steps like tool use.

**[pFedGPT: Hierarchically Optimizing LoRA Aggregation Weights for Personalized Federated GPT Models](https://aclanthology.org/2025.emnlp-main.239.pdf) (as "Model generation")**
> The observable production of text-based outputs in response to prompts, which is the primary behavior evaluated across various NLP tasks.

**[DICE: Structured Reasoning in LLMs through SLM-Guided Chain-of-Thought Correction](https://aclanthology.org/2025.emnlp-main.355.pdf) (as "Natural language response generation")**
> The task of producing unstructured, human-readable text in response to a prompt.

**[STEER-BENCH: A Benchmark for Evaluating the Steerability of Large Language Models](https://aclanthology.org/2025.emnlp-main.925.pdf) (as "Open-ended response generation")**
> Generating free-form responses to instructions that reflect a particular community's viewpoint.

**[The Impact of Negated Text on Hallucination with Large Language Models](https://aclanthology.org/2025.emnlp-main.684.pdf) (as "Completion")**
> The task of continuing a given text prompt to produce a coherent and contextually relevant extension.

**[Transplant Then Regenerate: A New Paradigm for Text Data Augmentation](https://aclanthology.org/2025.emnlp-main.702.pdf) (as "Bidirectional text continuation")**
> The process of generating text both before (backward continuation) and after (forward continuation) a given seed text to create a surrounding context.

**[SNaRe: Domain-aware Data Generation for Low-Resource Event Detection](https://aclanthology.org/2025.emnlp-main.1039.pdf) (as "Sentence generation")**
> Producing natural language sentences that include specified event triggers and align with a target domain's linguistic patterns.

**[LogiDynamics: Unraveling the Dynamics of Inductive, Abductive and Deductive Logical Inferences in LLM Reasoning](https://aclanthology.org/2025.emnlp-main.1045.pdf) (as "Free-text generation")**
> The observable behavior of producing open-ended textual outputs without constrained options, used as a task format in reasoning evaluations.

**[OpenTuringBench: An Open-Model-based Benchmark and Framework for Machine-Generated Text Detection and Attribution](https://aclanthology.org/2025.emnlp-main.1354.pdf) (as "Essay generation")**
> Producing long-form, coherent essays in a domain different from the training data (news), used to test out-of-domain generalization.

**[OpenTuringBench: An Open-Model-based Benchmark and Framework for Machine-Generated Text Detection and Attribution](https://aclanthology.org/2025.emnlp-main.1354.pdf) (as "Human-content continuation")**
> Machine models continuing human-authored text, creating blended content that challenges detection systems.

**[HydraOpt: Navigating the Efficiency-Performance Trade-off of Adapter Merging](https://aclanthology.org/2025.emnlp-main.1365.pdf) (as "Smart reply generation")**
> Generating a relevant and concise response to a given textual message.

**[QuZO: Quantized Zeroth-Order Fine-Tuning for Large Language Models](https://aclanthology.org/2025.emnlp-main.271.pdf) (as "Generation")**
> Producing free-form text outputs in response to an input prompt.

**[Job Unfair: An Investigation of Gender and Occupational Bias in Free-Form Text Completions by LLMs](https://aclanthology.org/2025.emnlp-main.1159.pdf) (as "Free-form text completion")**
> Generating open-ended continuations of partial sentences, particularly those involving occupational roles and gendered or gender-neutral prompts.

**[Accuracy is Not All You Need](https://proceedings.neurips.cc/paper_files/paper/2024/file/e0e956681b04ac126679e8c7dd706b2e-Paper-Conference.pdf) (as "Free-form text generation")**
> Generating open-ended natural language responses to prompts rather than selecting from fixed options.

**[Benchmarking LLMs via Uncertainty Quantification](https://proceedings.neurips.cc/paper_files/paper/2024/file/1bdcb065d40203a00bd39831153338bb-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Free-form Text Generation")**
> Generating text responses without fixed options, involving an extensive range of potential responses.

**[Closing the Curious Case of Neural Text Degeneration](https://proceedings.iclr.cc/paper_files/paper/2024/file/34899013589ef41aea4d7b2f0ef310c1-Paper-Conference.pdf) (as "Open-ended text generation")**
> The task of generating text without a specific, constrained format, often as a continuation of a given prompt.

**[The Belief State Transformer](https://proceedings.iclr.cc/paper_files/paper/2025/file/01b3dea1871f7cea1e0e6be1f2f085bc-Paper-Conference.pdf) (as "Unconditional text generation")**
> Generating a continuation when the goal or suffix is unknown, using only the prefix and internal decoding strategy.

**[Be Confident: Uncovering Overfitting in MLLM Multi-Task Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25r/huang25r.pdf) (as "Open-response generation")**
> Generating free-form, unconstrained text in response to a prompt, such as describing an image or answering a question without predefined choices.

## Relationships

### Text generation →
- **WikiText-2** (measurements) — *measured_by*
  > we evaluate quantized models by reporting the perplexity of language generation experiments, specifically on WikiText2 (Merity et al., 2016), PTB (Marcus et al., 1994)), C4 (Raffel et al., 2020). (Section 4.1)
  - [OmniQuant: Omnidirectionally Calibrated Quantization for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c6483c8a68083af3383f91ee0dc6db95-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > In this section, we use MT-Bench (Zheng et al., 2023) to evaluate the quantized models’ free-form text generation capabilities... (Section 6)
  - [Accuracy is Not All You Need](https://proceedings.neurips.cc/paper_files/paper/2024/file/e0e956681b04ac126679e8c7dd706b2e-Paper-Conference.pdf)
- **E2E NLG Challenge** (measurements) — *measured_by*
  > We compare our approach with LoRA and other parameter-efficient adaptation methods on the natural language understanding (GLUE) and natural language generation (E2E) benchmarks... (Section 1)
  - [VeRA: Vector-based Random Matrix Adaptation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1b53ad08de383a049e9668a9d0b6a053-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > As we generate open-ended text from our off-the-shelf models OTSi and our mLLaVA variants for Object Identification, we evaluate this particular task using an LLM-as-a-Judge, specifically Prometheus-2-8x7B (Kim et al., 2024). (Section 4.2)
  - [See It from My Perspective: How Language Affects Cultural Bias in Image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c0fabe372177d2aded596be2d3b4544-Paper-Conference.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > For open-ended generation tasks, we adopt TruthfulQA [29] and tasks involving chain-of-thought reasoning [52]: StrategyQA [12] and GSM8K [8]. (Section 3.1)
  - [SLED: Self Logits Evolution Decoding for Improving Factuality in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0939f13ffce3ff487509d902ddba4571-Paper-Conference.pdf)
- **C4** (measurements) — *measured_by*
  > we evaluate quantized models by reporting the perplexity of language generation experiments, specifically on WikiText2 (Merity et al., 2016), PTB (Marcus et al., 1994)), C4 (Raffel et al., 2020). (Section 4.1)
  - [OmniQuant: Omnidirectionally Calibrated Quantization for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c6483c8a68083af3383f91ee0dc6db95-Paper-Conference.pdf)
- **GSM8K** (measurements) — *measured_by*
  > "We conduct experiments on text generation tasks by fine-tuning Phi-3-mini-4k-instruct [1] on the GSM-8K [9] dataset"
  - [PACE: Marrying generalization in PArameter-efficient fine-tuning with Consistency rEgularization](https://proceedings.neurips.cc/paper_files/paper/2024/file/70a06501001e1820fd1eb9ee821302d2-Paper-Conference.pdf)
- **PTB** (measurements) — *measured_by*
  > we evaluate quantized models by reporting the perplexity of language generation experiments, specifically on WikiText2 (Merity et al., 2016), PTB (Marcus et al., 1994)), C4 (Raffel et al., 2020). (Section 4.1)
  - [OmniQuant: Omnidirectionally Calibrated Quantization for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c6483c8a68083af3383f91ee0dc6db95-Paper-Conference.pdf)
- **Vicuna-Bench** (measurements) — *measured_by*
  > “we employ a broad array of out-of-distribution benchmarks to conduct a more comprehensive evaluation of the model’s capabilities. This includes assessing ... open-ended generation (Vicuna (Chiang et al., 2023) and WizardLM (Xu et al., 2023))”
  - [Beyond Imitation: Leveraging Fine-grained Quality Signals for Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5c8236f62e33b5224634069e64cb271a-Paper-Conference.pdf)
- **Natural Questions** (measurements) — *measured_by*
  > We have conducted additional experiments on more realistic open-ended generations datasets, Hot-PotQA [57], Natural Question (NQ) [23], TriviaQA [21]. (Appendix D)
  - [SLED: Self Logits Evolution Decoding for Improving Factuality in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0939f13ffce3ff487509d902ddba4571-Paper-Conference.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > We have conducted additional experiments on more realistic open-ended generations datasets, Hot-PotQA [57], Natural Question (NQ) [23], TriviaQA [21]. (Appendix D)
  - [SLED: Self Logits Evolution Decoding for Improving Factuality in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0939f13ffce3ff487509d902ddba4571-Paper-Conference.pdf)
- **TinyStories** (measurements) — *measured_by*
  > "When trained on the TinyStories dataset ... ARDTs produce coherent and grammatically accurate text"
  - [On the Power of Decision Trees in Auto-Regressive Language Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/72176f95680c3fb27a0966f36d5d0c53-Paper-Conference.pdf)
- **AlpacaEval 2.0** (measurements) — *measured_by*
  > Our models are also tested for their open-ended text generation capabilities using model-based evaluations, specifically through MT-Bench [77], AlpacaEval 1.0 and 2.0 [37] (Section 4.1)
  - [Instruction Tuning With Loss Over Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/7ffb43adf37b3eeaba559098bc084cc6-Paper-Conference.pdf)
- **WebNLG** (measurements) — *measured_by*
  > We utilize the following datasets for our Natural Language Generation (NLG) task: ... WebNLG (Gardent et al., 2017) is a text-to-data dataset... (Section 3.1)
  - [NOLA: Compressing LoRA using Linear Combination of Random Basis](https://proceedings.iclr.cc/paper_files/paper/2024/file/66b99dbf9ed172abac5cb5ccfc82d1e2-Paper-Conference.pdf)
- **XSum** (measurements) — *measured_by*
  > For the NLG task, we finetune the encoder-decoder model BART-large [11] and T5-base [21] on the text summarization datasets XSum [19] and CNN/DailyMail [8]
  - [Unveiling LoRA Intrinsic Ranks via Salience Analysis](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed9f00cb7dd5fbdc2175d55e2fdf1b05-Paper-Conference.pdf)
- **OpenWebText** (measurements) — *measured_by*
  > We first compare the quality of unconditional samples generated by models trained on either WebText (Radford et al., 2019) or OpenWebText (Gokaslan & Cohen, 2019)... (Section 6.1)
  - [Discrete Copula Diffusion](https://proceedings.iclr.cc/paper_files/paper/2025/file/dd1fef536655685898a6602bfbf16857-Paper-Conference.pdf)
- **Super-NaturalInstructions** (measurements) — *measured_by*
  > The Super-Natural instruction dataset (Wang et al., 2022) contains a collection of 1600+ NLP tasks, including both classiﬁcation and generation tasks.
  - [LoRA Done RITE: Robust Invariant Transformation Equilibration for LoRA Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/bcbc0f660d2dde42f9d1d0ecb14a6f9a-Paper-Conference.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > To corroborate these G-Eval findings, we conduct human evaluations involving 5 in-house annotators who assessed 50 randomly selected ChatGPT’s generations across the datasets. (Section 4.2)
  - [Flexibly Utilize Memory for Long-Term Conversation via a Fragment-then-Compose Framework](https://aclanthology.org/2025.emnlp-main.1069.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > ...two generation datasets... with the LM-Evaluation-Harness framework (Gao et al., 2023).
  - [SVD-LLM V2: Optimizing Singular Value Truncation for Large Language Model Compression](https://aclanthology.org/2025.naacl-long.217.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > We theorise that as the VLLMs have not been explicitly trained on image-language pairs of manipulated images, a large number of parameters on the language generation leads to more hallucinations [25, 79] for this simple but abstract task. (Section 5.1)
  - [A Hitchhiker's Guide to Fine-Grained Face Forgery Detection Using Common Sense Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/059d2b9188cdb7ae00f4d78cc9469704-Paper-Datasets_and_Benchmarks_Track.pdf)
- **DART** (measurements) — *measured_by*
  > We utilize the following datasets for our Natural Language Generation (NLG) task: ... DART (Nan et al., 2020) is yet another significant dataset employed for evaluating text-to-data generation. (Section 3.1)
  - [NOLA: Compressing LoRA using Linear Combination of Random Basis](https://proceedings.iclr.cc/paper_files/paper/2024/file/66b99dbf9ed172abac5cb5ccfc82d1e2-Paper-Conference.pdf)
- **LAMBADA** (measurements) — *measured_by*
  > We evaluate our models on the LAMBADA dataset and report accuracy and perplexity for zero-shot generation in Figure 4.
  - [Headless Language Models: Learning without Predicting with Contrastive Weight Tying](https://proceedings.iclr.cc/paper_files/paper/2024/file/92864e1191ed272deb0914b3bb50f97c-Paper-Conference.pdf)
- **MAUVE** (measurements) — *measured_by*
  > "Mauve ... has seen wide usage in open-ended text generation"
  - [EMO: EARTH MOVER DISTANCE OPTIMIZATION FOR AUTO-REGRESSIVE LANGUAGE MODELING](https://proceedings.iclr.cc/paper_files/paper/2024/file/1626be0ab7f3d7b3c639fbfd5951bc40-Paper-Conference.pdf)
- **WizardLM** (measurements) — *measured_by*
  > “we employ a broad array of out-of-distribution benchmarks to conduct a more comprehensive evaluation of the model’s capabilities. This includes assessing ... open-ended generation (Vicuna (Chiang et al., 2023) and WizardLM (Xu et al., 2023))”
  - [Beyond Imitation: Leveraging Fine-grained Quality Signals for Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5c8236f62e33b5224634069e64cb271a-Paper-Conference.pdf)
- **HotpotQA** (measurements) — *measured_by*
  > We have conducted additional experiments on more realistic open-ended generations datasets, Hot-PotQA [57], Natural Question (NQ) [23], TriviaQA [21]. (Appendix D)
  - [SLED: Self Logits Evolution Decoding for Improving Factuality in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0939f13ffce3ff487509d902ddba4571-Paper-Conference.pdf)
- **MMBench-Video** (measurements) — *measured_by*
  > In response, we present MMBench-Video, a novel dataset tailored for longer videos, challenging models to generate detailed, free-form responses to complex questions. (Section 2.2)
  - [MMBench-Video: A Long-Form Multi-Shot Benchmark for Holistic Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a2326c9715a516c91174132e0170073a-Paper-Datasets_and_Benchmarks_Track.pdf)
- **CNN/DailyMail** (measurements) — *measured_by*
  > For the NLG task, we finetune the encoder-decoder model BART-large [11] and T5-base [21] on the text summarization datasets XSum [19] and CNN/DailyMail [8]
  - [Unveiling LoRA Intrinsic Ranks via Salience Analysis](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed9f00cb7dd5fbdc2175d55e2fdf1b05-Paper-Conference.pdf)
- **BioASQ** (measurements) — *measured_by*
  > We evaluate our method on the following tasks covering different domains of natural language generation: ... biology and medicine (BioASQ [35]) (Sec. 5)
  - [Kernel Language Entropy: Fine-grained Uncertainty Quantification for LLMs from Semantic Similarities](https://proceedings.neurips.cc/paper_files/paper/2024/file/10c456d2160517581a234dfde15a7505-Paper-Conference.pdf)
- **MM-Vet** (measurements) — *measured_by*
  > Table 5: Multimodal reasoning ability on MM-Vet [92]. Rec denotes Recognition; Know denotes knowledge; Gen denotes Language generation; and Spat denotes Spatial awareness.
  - [LOVA3: Learning to Visual Question Answering, Asking and Assessment](https://proceedings.neurips.cc/paper_files/paper/2024/file/d0822540916cd716add52e1846a6e18d-Paper-Conference.pdf)
- **StrategyQA** (measurements) — *measured_by*
  > "For open-ended generation tasks, we adopt TruthfulQA [29] and tasks involving chain-of-thought reasoning [52]: StrategyQA [12] and GSM8K [8]."
  - [SLED: Self Logits Evolution Decoding for Improving Factuality in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0939f13ffce3ff487509d902ddba4571-Paper-Conference.pdf)
- **ToxiGen** (measurements) — *measured_by*
  > For the open-ended generation tasks, we apply SADI on TriviaQA (Joshi et al., 2017), TruthfulQA (Lin et al., 2022), ToxiGen (Hartvigsen et al., 2022) datasets. (Section 4.1)
  - [Semantics-Adaptive Activation Intervention for LLMs via Dynamic Steering Vectors](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4d26a95fd83f8e590f81c54ae670b5d-Paper-Conference.pdf)
- **MetaMathQA** (measurements) — *measured_by*
  > as well as 5 NLG benchmarks: MetaMathQA (Yu et al., 2023), Alpaca-GPT4 (Peng et al., 2023), FedAya (Ye et al., 2024a), Fed-ChatbotIT (Ye et al., 2024a), and Fed-WildChat (Ye et al., 2024a) (Section 4).
  - [Federated Residual Low-Rank Adaption of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/906c860f1b7515a8ffec02dcdac74048-Paper-Conference.pdf)
- **AlpacaEval** (measurements) — *measured_by*
  > “We prompt the trained models to answer 805 questions from the AlpacaEval dataset”
  - [Preserving Diversity in Supervised Fine-Tuning of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a548ef984f30bca3abdc09f43743827f-Paper-Conference.pdf)
- **Data augmentation** (behaviors tasks) — *causes*
  > “Like Q&A, we require the LLM to ensure the fine-tuned model answers new instructions with difficulty”
  - [FiNE: Filtering and Improving Noisy Data Elaborately with Large Language Models](https://aclanthology.org/2025.naacl-long.437.pdf)
- **Alpaca instruction dataset** (measurements) — *measured_by*
  > We employ three distinct text generation datasets: Alpaca (Taori et al., 2023), tldr_news (Belvèze, 2022), and MHC (Amod, 2024), to evaluate the effectiveness of our method across various generation tasks.
  - [JoPA: Explaining Large Language Model's Generation via Joint Prompt Attribution](https://aclanthology.org/2025.acl-long.1074.pdf)
- **UltraChat** (measurements) — *measured_by*
  > For chat APIs and instruct LLMs, we generate outputs from UltraChat (Ding et al., 2023), a diverse dialogue and instruction dataset.
  - [Idiosyncrasies in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25z/sun25z.pdf)
- **CommonGen** (measurements) — *measured_by*
  > We evaluate Plugin on four text generation benchmarks: (a) E2E NLG (Duˇsek et al., 2020), (b) Web NLG (Gardent et al., 2017), (c) CommonGen (Lin et al., 2020), and (d) the Adidas product description dataset (adi, 2023). (Section 7)
  - [Logits are All We Need to Adapt Closed Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hiranandani25a/hiranandani25a.pdf)
- **Response understanding** (constructs) — *causes*
  > To improve response understanding, we train the LLM to generate responses given the input, as illustrated in Figure 3 (a). (Section 3.2.1)
  - [GRAM: A Generative Foundation Reward Model for Reward Generalization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ad/wang25ad.pdf)
- **Generative perplexity** (measurements) — *measured_by*
  > “One principled metric to evaluate unconditional generation is DKL(pβ(x)||pdata(x)) = Epβ(x)[−log pdata(x)]−H(pβ). As both terms are intractable, alternative metrics have been proposed: Dieleman et al. (2022) introduce generative perplexity (Gen PPL)”
  - [Latent Thought Models with Variational Bayes Inference-Time Computation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kong25c/kong25c.pdf)
- **WikiText-103** (measurements) — *measured_by*
  > "For the latter, we follow (Tong et al., 2023) to use Wikitext-103-v1, a large-scale dataset derived from Wikipedia articles for language modeling tasks."
  - [Cape: Context-Aware Prompt Perturbation Mechanism with Differential Privacy](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25g/wu25g.pdf)
- **SVAMP** (measurements) — *measured_by*
  > Text Generation We use the SVAMP dataset (Patel et al., 2021) which consists of English math word problems with grade level up to 4.
  - [RRInf: Efficient Influence Function Estimation via Ridge Regression for Large Language Models and Text-to-Image Diffusion Models](https://aclanthology.org/2025.emnlp-main.933.pdf)
- **CHAIR** (measurements) — *measured_by*
  > Finally, for open-ended generation, we use the CHAIR (Rohrbach et al., 2018). (Section 5.1)
  - [Unveiling the Response of Large Vision-Language Models to Visually Absent Tokens](https://aclanthology.org/2025.emnlp-main.1092.pdf)
- **ESConv** (measurements) — *measured_by*
  > we conduct experiments on the ESConv dataset by selectively omitting each of the four distinct aspects when applying the IntentionFrame framework to enhance downstream response generation.
  - [IntentionFrame: A Semi-Structured, Multi-Aspect Framework for Fine-Grained Conversational Intention Understanding](https://aclanthology.org/2025.emnlp-main.1427.pdf)
- **LaMP** (measurements) — *measured_by*
  > "LaMP benchmark consisting of various text classification and generation tasks"
  - [Personalized Language Models via Privacy-Preserving Evolutionary Model Merging](https://aclanthology.org/2025.emnlp-main.1747.pdf)

### → Text generation
- **Computational efficiency** (constructs) — *causes*
  > The increased compute efficiency combined with constant memory usage during inference allows spending more compute at test-time, but also enables running models locally on edge devices acting as an interface to the user with fast response times. (Section 1)
  - [xLSTM 7B: A Recurrent LLM for Fast and Efficient Inference](https://raw.githubusercontent.com/mlresearch/v267/main/assets/beck25b/beck25b.pdf)
- **Thought generation** (behaviors tasks) — *causes*
  > Through preference optimization the thoughts are then optimized to improve the resulting responses (Section 2.2).
  - [Thinking LLMs: General Instruction Following with Thought Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25o/wu25o.pdf)

### Associated with
- **Text generation quality** (constructs)
  > "we also demonstrate improved generation quality in open-ended text generation"
  - [Retrieval is Accurate Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/a6610efd6c767f63343a4ab28505212e-Paper-Conference.pdf)
- **Generation diversity** (constructs)
  > Diversity: This metric measures the ability to generate texts with a wide range of vocabulary.
  - [Collab: Controlled Decoding using Mixture of Agents for LLM Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e79dce47c5bbe738dff9c05ace8a037-Paper-Conference.pdf)
- **Generative ability** (constructs)
  > "make progress toward more expressive sampling algorithms that better surface the generative capabilities of large language models."
  - [Closing the Curious Case of Neural Text Degeneration](https://proceedings.iclr.cc/paper_files/paper/2024/file/34899013589ef41aea4d7b2f0ef310c1-Paper-Conference.pdf)
- **Objective mismatch** (constructs)
  > As pointed out in Section 3.3, this can be attributed to an objective mismatch between text generation and preference modeling. (Section 5.2).
  - [Geometric-Averaged Preference Optimization for Soft Preference Labels](https://proceedings.neurips.cc/paper_files/paper/2024/file/688c7a82e31653e7c256c6c29fd3b438-Paper-Conference.pdf)
- **Judicial analysis generation** (behaviors tasks)
  > Tasks at the Generation level require LLMs to generate legal texts with given requirements and formats. We construct four tasks at this level: ...Judicial Analysis Generation (5-2)... (Section C.3.5)
  - [LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Machine translation** (behaviors tasks)
  > Tasks at the Generation level require LLMs to generate legal texts with given requirements and formats. We construct four tasks at this level: ...Legal Translation (5-3)... (Section C.3.5)
  - [LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Memorization** (constructs)
  > we observe that LISA is much better than LoRA at memorization-centered tasks, such as Writing or depicting image details, while this gap is much smaller in reasoning-centered tasks like Code or Math (Section 5).
  - [LISA: Layerwise Importance Sampling for Memory-Efficient Large Language Model Fine-Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/687163285b8affc8ee933bdca8e75747-Paper-Conference.pdf)
- **Autoregressive language modeling** (behaviors tasks)
  > We investigate the RL-centric perspective to imitation for LLMs, extracting rewards and directly optimizing actions for sequence generation instead of individual token likelihood. (Section 1).
  - [Imitating Language via Scalable Inverse Reinforcement Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5036c166e44b731f214f41813364d01-Paper-Conference.pdf)
- **Logical reasoning** (constructs)
  > When evaluating the Writing Legal Document scenario, logic is identified as the most critical dimension, followed by considerations of harmlessness and clarity, reflecting the distinct requirements of legal writing.
  - [SaMer: A Scenario-aware Multi-dimensional Evaluator for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/646ca7b994bc46afe33d680dbe7ed67a-Paper-Conference.pdf)
- **Retrieval-augmented generation** (behaviors tasks)
  > One such scenario is Retrieval-Augmented Generation (RAG) (Lewis et al., 2021a), where an embedding model retrieves context for a generative model to answer a user query. (Section 2)
  - [Generative Representational Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/70cf215430492f7d34830a24e744b3f1-Paper-Conference.pdf)
- **Coherence** (constructs)
  > Coherence evaluates the semantic relatedness between each prompt and its generated response.
  - [Collab: Controlled Decoding using Mixture of Agents for LLM Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e79dce47c5bbe738dff9c05ace8a037-Paper-Conference.pdf)
- **Alignment** (constructs)
  > They did not investigate the more challenging task of language generation, which is closely tied to alignment and involves a significantly more complex output space. (Section 5)
  - [Your Weak LLM is Secretly a Strong Teacher for Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/332b4fbe322e11a71fa39d91c664d8fa-Paper-Conference.pdf)
- **Self-consistency** (measurements)
  > This naturally leads us to ask: how can we further unlock the potential of self-consistency and repeated sampling in open-ended generation tasks? (Section 1)
  - [Integrative Decoding: Improving Factuality via Implicit Self-consistency](https://proceedings.iclr.cc/paper_files/paper/2025/file/adaf1463442f5986fe81dc6c719a13a1-Paper-Conference.pdf)
- **Cultural bias** (constructs)
  > "In open-ended generative tasks like narrative writing or dialogue, large language models often exhibit cultural biases"
  - [Attributing Culture-Conditioned Generations to Pretraining Corpora](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4546b4f9e1a44ed15c253dd43307dd5-Paper-Conference.pdf)
- **Aspect-based sentiment analysis** (behaviors tasks)
  > Alternatively, the ABSA task can be formulated as a text generation problem, where the model predicts a set of sentiment tuples y = {(ai, pi)}T i=1, (Section 3.1)
  - [LACA: Improving Cross-lingual Aspect-Based Sentiment Analysis with LLM Data Augmentation](https://aclanthology.org/2025.acl-long.41.pdf)
- **Prompt engineering** (behaviors tasks)
  > eva (Evolving via Asymmetric Self-Play) casts language model training as a game between: (1) a creator, who samples and generates training prompts, and (2) a solver, who generates responses to the prompts. (Figure 1)
  - [Reward-Guided Prompt Evolving in Reinforcement Learning for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25a/ye25a.pdf)
- **Peer review generation** (behaviors tasks)
  > we split the research simulation process into three critical stages: (1) paper reading, (2) paper writing, and (3) review writing. We believe these stages are crucial in the research community, and each stage relies on the output of the previous stage as input. (Section 5)
  - [ResearchTown: Simulator of Human Research Community](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25i/yu25i.pdf)
- **Language modeling** (behaviors tasks)
  > “in language generation, x is a sequence of tokens t1 · · · tk, y is the next token tk+1”
  - [Portable Reward Tuning: Towards Reusable Fine-Tuning across Different Pretrained Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chijiwa25a/chijiwa25a.pdf)
- **Creative writing** (behaviors tasks)
  > Creative composition encompasses generation tasks that require everyday creativity for personal goals... brainstorming solutions to personal problems requires inventive and harmless advice. (Section 1)
  - [Position: Societal Impacts Research Requires Benchmarks for Creative Composition Tasks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25r/shen25r.pdf)
- **Generalization** (constructs)
  > Two core challenges distinguish open-ended generation from closed-end tasks: (1) Limited generalization across prompt variations... (Introduction)
  - [SAE-SSV: Supervised Steering in Sparse Representation Spaces for Reliable Control of Language Models](https://aclanthology.org/2025.emnlp-main.112.pdf)
- **Natural language understanding** (constructs)
  > For actions that require natural language understanding, such as composing a text message or querying a search engine, a VLM is invoked to generate the necessary text.
  - [Lightweight Neural App Control](https://proceedings.iclr.cc/paper_files/paper/2025/file/b81266057eb3d96469940d1860a41ad2-Paper-Conference.pdf)
- **FLAN** (measurements)
  > FLAN is a dataset with more diverse forms of tasks, including free-form generation tasks like translation and summarization. (Section 5)
  - [BenTo: Benchmark Reduction with In-Context Transferability](https://proceedings.iclr.cc/paper_files/paper/2025/file/4798eef078de031518beaf54f4b5fb5f-Paper-Conference.pdf)
- **Human preference alignment** (constructs)
  > given π∗aligned with human preference, it can both empower response generation, as well as work with its reference model (amateur) to enhance the scoring of HPA for candidate responses. (Section 1)
  - [Instantly Learning Preference Alignment via In-context DPO](https://aclanthology.org/2025.naacl-long.8.pdf)
- **Utility preservation** (constructs)
  > As a foundation model, f ′ is expected to retain abilities such as text and code generation, question answering, instruction-following, and basic mathematical reasoning.
  - [Tool Unlearning for Tool-Augmented LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25a/cheng25a.pdf)
- **Robustness** (constructs)
  > “We systematically compare three widely used value probing methods: token likelihood, sequence perplexity, and text generation. Our results show that all three methods exhibit large variances under non-semantic perturbations” (Abstract).
  - [Revisiting LLM Value Probing Strategies: Are They Robust and Expressive?](https://aclanthology.org/2025.emnlp-main.7.pdf)
