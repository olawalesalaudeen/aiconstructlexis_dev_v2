# Text summarization
**Type:** Behavior  
**Referenced in:** 326 papers  
**Also known as:** Summarization, Summary generation, Document description, Text abbreviation, Spotlight generation, Paper reading, Document summarization, Document Summarization  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is producing a concise, coherent, shorter version of a longer source text or document. Most definitions add that the output should preserve the main idea, salient content, core meaning, or essence of the source, and some explicitly allow either extractive or abstractive summaries. A smaller line makes the success criteria more explicit, judging summaries for coverage, accuracy, coherence, overall quality, faithfulness, or factuality, and a few papers broaden the task to titles or bullet-pointed key information.

**Variants.** Most work studies standard document-to-summary settings, but papers also distinguish dialogue summarization, multi-document or long-document summarization, and query-based meeting summarization. The domains mentioned include news articles, Reddit posts, government reports, academic papers, manuals or agreements, and scientific or medical texts, with multilingual settings also appearing and some tasks asking for one-sentence summaries. Smaller variants treat the behavior as document description, text abbreviation, spotlight generation, paper reading, sensor-data summary, or condensing a multi-agent conversation into a final image description.

**Space of elicitation and scores.** Papers measure this behavior with 25 instruments. The most recurrent are CNN/DailyMail, XSum, LongBench, Reddit TL;DR, and SAMSum, spanning document summarization, long-context benchmarks, post summarization, and dialogue summarization. Smaller lines use many other datasets and benchmarks, and some papers score outputs with human or model-based judgments, including coverage, accuracy, coherence, overall quality, faithfulness, and win rate against reference summaries.

**What it is taken as evidence of.** Papers link this behavior to 11 constructs, but they do not converge on a single construct that it reflects. The prevailing construct-level framing is long-context understanding: papers use summarization to measure it, and other papers report it to correlate with it, relate it to it, or claim a causal relationship from long-context understanding to summarization. Smaller lines use summarization to measure generalization, language modeling ability, or length generalization, while treating it as related to faithfulness, prompt understanding, instruction following ability, in-context learning, tool use ability, verbosity, or adaptability.

## Sources

**[Achieving Human Parity in Content-Grounded Datasets Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf) (as "Summarization")**
> The task of creating a concise and coherent version of a longer source text.

**[Bounded Rationality for LLMs: Satisficing Alignment at Inference-Time](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chehade25a/chehade25a.pdf) (as "Summary generation")**
> Producing condensed versions of input texts, evaluated for both quality and faithfulness in the summarization task.

**[Synthesizing Privacy-Preserving Text Data via Finetuning *without* Finetuning Billion-Scale LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25g/tan25g.pdf) (as "Document description")**
> The task of generating a structured or unstructured summary of a document's key attributes, such as its type, keywords, and tone.

**[SmartBench: Is Your LLM Truly a Good Chinese Smartphone Assistant?](https://aclanthology.org/2025.emnlp-main.194.pdf) (as "Text abbreviation")**
> The task of shortening a given text while preserving its core meaning.

**[Introducing Spotlight: A Novel Approach for Generating Captivating Key Information from Documents](https://aclanthology.org/2025.emnlp-main.1796.pdf) (as "Spotlight generation")**
> Producing a concise, self-contained narrative that highlights the most engaging and insightful elements of a document to encourage deeper reader exploration.

**[AutoCast++: Enhancing World Event Prediction with Zero-shot Ranking-based Context Retrieval](https://proceedings.iclr.cc/paper_files/paper/2024/file/93f01c8d9b355d7bbe3f353b44ccde66-Paper-Conference.pdf)**
> Producing a concise summary of a longer input text, evaluated using models fine-tuned on the CNN/Daily Mail dataset.

**[ResearchTown: Simulator of Human Research Community](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25i/yu25i.pdf) (as "Paper reading")**
> Aggregating information from papers to form a researcher profile or condensed understanding of research materials.

**[Found in the Middle: How Language Models Use Long Contexts Better via Plug-and-Play Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ffdbbe354893979367f93e2121e37dd-Paper-Conference.pdf) (as "Document summarization")**
> The task of generating a concise summary of one or more long documents.

**[Benchmarking LLMs via Uncertainty Quantification](https://proceedings.neurips.cc/paper_files/paper/2024/file/1bdcb065d40203a00bd39831153338bb-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Document Summarization")**
> Comprehending the substance and context of a given document and producing a succinct and cohesive summary.

## Relationships

### Text summarization →
- **CNN/DailyMail** (measurements) — *measured_by*
  > Summarization on CNN Dailymail. (Figure 3b)
  - [Improving Generalization of Alignment with Human Preferences through Group Invariant Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2d82a425af4c18a35049899fea5ee82-Paper-Conference.pdf)
- **XSum** (measurements) — *measured_by*
  > We use 61.5% test set data for XSUM (Narayan et al., 2018), 17.6% for CNN/DM (Nallapati et al., 2016), and 4.0% for MEDIASUM (Zhu et al., 2021). (Section 4.2).
  - [Evaluating the Zero-shot Robustness of Instruction-tuned Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3221cdb27e49d9c1cd35ad254feccfe-Paper-Conference.pdf)
- **Reddit TL;DR** (measurements) — *measured_by*
  > Summarization Task. SFT dataset: Reddit TL;DR dataset is used, comprising 123, 169 Reddit posts along with human-written summaries. (Section 5)
  - [Improving Generalization of Alignment with Human Preferences through Group Invariant Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2d82a425af4c18a35049899fea5ee82-Paper-Conference.pdf)
- **LongBench** (measurements) — *measured_by*
  > This benchmark encompasses a broad range of tasks, such as question-answering, summarization, and code completion, where the evaluation length ranges from 5k to 15k. (Section 4.3)
  - [CLEX: Continuous  Length Extrapolation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/3df38ca67befaed9c03b95ffee07d9f8-Paper-Conference.pdf)
- **SAMSum** (measurements) — *measured_by*
  > As an early application for Hedgehog on larger models, we convert Llama-2 7B (Touvron et al., 2023) before finetuning with low-rank adapters (LoRA) (Hu et al., 2021) on SAMSum summarization (Gliwa et al., 2019).
  - [The Hedgehog & the Porcupine: Expressive Linear Attentions with Softmax Mimicry](https://proceedings.iclr.cc/paper_files/paper/2024/file/ebba182cb97864368fdb6ae00773a5e4-Paper-Conference.pdf)
- **InfiniteBench** (measurements) — *measured_by*
  > "The datasets in ∞-Bench cover diverse tasks including question answering, summarization, context retrieval, and mathematic computing."
  - [InfLLM: Training-Free Long-Context Extrapolation for LLMs with an Efficient Context Memory](https://proceedings.neurips.cc/paper_files/paper/2024/file/d842425e4bf79ba039352da0f658a906-Paper-Conference.pdf)
- **MultiNews** (measurements) — *measured_by*
  > We investigate the drafts produced by this 1.5B blockwise parallel LM on ... ﬁve summarization tasks: XSUM [32], MultiNews [12], SAMSum [14], NewsRoom [15] and CNN/DailyMail [17]. (Section 4)
  - [Accelerating Blockwise Parallel Language Models with Draft Refinement](https://proceedings.neurips.cc/paper_files/paper/2024/file/3c9629e718d931e8d4d240378aa1d3bf-Paper-Conference.pdf)
- **XLSum** (measurements) — *measured_by*
  > We select the text summarization task with the XLSum (Hasan et al., 2021) dataset as the reference task to evaluate multilingual performance as it requires the model to comprehend the input text and generate a coherent fragment. (Section 2.3)
  - [How do Large Language Models Handle Multilingualism?](https://proceedings.neurips.cc/paper_files/paper/2024/file/1bd359b32ab8b2a6bbafa1ed2856cf40-Paper-Conference.pdf)
- **GovReport** (measurements) — *measured_by*
  > GovReport [25] is a generic summarization dataset containing long reports published by the U.S. Government Accountability Office (Section 4.1).
  - [Chain of Agents: Large Language Models Collaborating on Long-Context Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/ee71a4b14ec26710b39ee6be113d7750-Paper-Conference.pdf)
- **DialogSum** (measurements) — *measured_by*
  > For the decoding stage evaluation, we conduct experiments on two summarization benchmarks: DialogSum (Chen et al., 2021) and CNN/DM (Hermann et al., 2015) (Section 4.1).
  - [FLRC: Fine-grained Low-Rank Compressor for Efficient LLM Inference](https://aclanthology.org/2025.emnlp-main.755.pdf)
- **QMSum** (measurements) — *measured_by*
  > Summarization. We pick two summarization datasets from SCROLLS. QMSum [93] is a query-based summarization dataset, formed by meeting transcripts from multiple domains
  - [Chain of Agents: Large Language Models Collaborating on Long-Context Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/ee71a4b14ec26710b39ee6be113d7750-Paper-Conference.pdf)
- **ZeroSCROLLS** (measurements) — *measured_by*
  > "ZeroSCROLLS benchmark ... contains ten diverse natural language tasks that require understanding long input contexts, including summarization, question answering"
  - [IceFormer: Accelerated Inference with Long-Sequence Transformers on CPUs](https://proceedings.iclr.cc/paper_files/paper/2024/file/4059971112ab22fc7b6aed520aaca6b2-Paper-Conference.pdf)
- **BookSum** (measurements) — *measured_by*
  > BookSum [33] is a collection of datasets for long-form narrative summarization, including novels, plays, and stories (Section 4.1).
  - [Chain of Agents: Large Language Models Collaborating on Long-Context Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/ee71a4b14ec26710b39ee6be113d7750-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > For the dialogue generation and summarization tasks, we use GPT-4 for zero-shot pairwise evaluation, which is consistent with human judgments (see prompts in Appendix C.2.1). (Section 5.1)
  - [Cal-DPO: Calibrated Direct Preference Optimization for Language Model Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/cf8b2205e39f81726a8d828ecbe00ad0-Paper-Conference.pdf)
- **Spec-Bench** (measurements) — *measured_by*
  > The benchmark includes various generation subtasks including... summarization
  - [Block Verification Accelerates Speculative Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e710b42b1a9ed898f607ec0f4fcc971-Paper-Conference.pdf)
- **MediaSum** (measurements) — *measured_by*
  > We use 61.5% test set data for XSUM (Narayan et al., 2018), 17.6% for CNN/DM (Nallapati et al., 2016), and 4.0% for MEDIASUM (Zhu et al., 2021). (Section 4.2).
  - [Evaluating the Zero-shot Robustness of Instruction-tuned Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3221cdb27e49d9c1cd35ad254feccfe-Paper-Conference.pdf)
- **HaluEval** (measurements) — *measured_by*
  > Similar to DRS, we adopt the summarization data from the HaluEval [40] benchmark as the evaluation dataset (denoted as HaluSum).
  - [Benchmarking LLMs via Uncertainty Quantification](https://proceedings.neurips.cc/paper_files/paper/2024/file/1bdcb065d40203a00bd39831153338bb-Paper-Datasets_and_Benchmarks_Track.pdf)
- **TACT** (measurements) — *measured_by*
  > "Through TACT, the model is implicitly required to address information extraction (IE) challenges such as coreference resolution [Lee et al., 2017, Joshi et al., 2019, Kirstain et al., 2021], multi-hop reasoning [Lin et al., 2018, Dua et al., 2019, Zhao et al., 2022], summarization"
  - [TACT: Advancing Complex Aggregative Reasoning with Information Extraction Tools](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d7025dc9bd4c8b6fb1eef80cc618008-Paper-Datasets_and_Benchmarks_Track.pdf)
- **PubMed** (measurements) — *measured_by*
  > We further evaluate the methods on three summarization datasets. ... PubMed (Tang et al., 2023) is a collection of medical scientific articles where the goal is to summarize the conclusions of the authors... (Section 4.1)
  - [SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)
- **SummEval** (measurements) — *measured_by*
  > For this task, we use the SummEval (Fabbri et al., 2021) for text summarization evaluation. (Section 4)
  - [MetaMetrics: Calibrating Metrics for Generation Tasks Using Human Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1b248453bca182b6138b8c14a75340d-Paper-Conference.pdf)
- **TofuEval** (measurements) — *measured_by*
  > To test ADACAD on longer-form generation tasks, we evaluate on three standard summarization tasks: CNN-DM (See et al., 2017), XSum (Narayan et al., 2018), and TofuEval (Tang et al., 2024). (Section 4.1).
  - [AdaCAD: Adaptively Decoding to Balance Conflicts between Contextual and Parametric Knowledge](https://aclanthology.org/2025.naacl-long.581.pdf)
- **BARTScore** (measurements) — *measured_by*
  > "Coherence →BARTScore (Yuan et al., 2021)"
  - [PlagBench: Exploring the Duality of Large Language Models in Plagiarism Generation and Detection](https://aclanthology.org/2025.naacl-long.384.pdf)
- **AlignScore** (measurements) — *measured_by*
  > "We use the same models from paraphrase evaluation regarding consistency and language quality"
  - [PlagBench: Exploring the Duality of Large Language Models in Plagiarism Generation and Detection](https://aclanthology.org/2025.naacl-long.384.pdf)
- **ROUGE-L** (measurements) — *measured_by*
  > For reference-based metrics, we evaluate DPRefine using ROUGE-L (Lin, 2004) and BERT-F1 (Zhang et al., 2019) to assess token overlap and semantic similarity with reference outputs.
  - [Differentially Private Learning Needs Better Model Initialization and Self-Distillation](https://aclanthology.org/2025.naacl-long.455.pdf)
- **RULER** (measurements) — *measured_by*
  > A significant portion of long-context evaluation datasets, including RULER (Hsieh et al., 2024b), LongBench (Bai et al., 2024), LongBench v2 (Bai et al., 2025), and LOFT (Lee et al., 2024), primarily assess retrieval and summarization rather than complex reasoning. (Section 2)
  - [GSM-$∞$: How Do your LLMs Behave over Infinitely Increasing Reasoning Complexity and Context Length?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25m/zhou25m.pdf)
- **LongBench v2** (measurements) — *measured_by*
  > A significant portion of long-context evaluation datasets, including RULER (Hsieh et al., 2024b), LongBench (Bai et al., 2024), LongBench v2 (Bai et al., 2025), and LOFT (Lee et al., 2024), primarily assess retrieval and summarization rather than complex reasoning. (Section 2)
  - [GSM-$∞$: How Do your LLMs Behave over Infinitely Increasing Reasoning Complexity and Context Length?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25m/zhou25m.pdf)
- **LOFT** (measurements) — *measured_by*
  > A significant portion of long-context evaluation datasets, including RULER (Hsieh et al., 2024b), LongBench (Bai et al., 2024), LongBench v2 (Bai et al., 2025), and LOFT (Lee et al., 2024), primarily assess retrieval and summarization rather than complex reasoning. (Section 2)
  - [GSM-$∞$: How Do your LLMs Behave over Infinitely Increasing Reasoning Complexity and Context Length?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25m/zhou25m.pdf)
- **BERTScore** (measurements) — *measured_by*
  > "Similarity with those expert solutions can be measured through metrics such as ROUGE (Lin, 2004) and BERTScore (Zhang et al., 2019), and be employed for scoring the LLM generations."
  - [Can RLHF be More Efficient with Imperfect Reward Models? A Policy Coverage Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25o/huang25o.pdf)
- **AUTO-J** (measurements) — *measured_by*
  > Since human-labeled summaries are available, we measure the win rate of the model-generated summaries against the human ones using the Auto-J model (Li et al., 2023a). (Section 7.1)
  - [Towards Federated RLHF with Aggregated Client Preference for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/124dde499d62b58e97e42a45b26d7369-Paper-Conference.pdf)

### → Text summarization
- **Long-context understanding** (constructs) — *causes*
  > LLMs equipped with longer context lengths excel at handling complex tasks (Caciularu et al., 2023; Bairi et al., 2023; Mazumder & Liu, 2022), especially those with long input, e.g., document summarization. (Section 1)
  - [Quest: Query-centric Data Synthesis Approach for Long-context Scaling of Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/e54e6eef11f87a874bf1e4551fc6d04e-Paper-Conference.pdf)
- **Coreference resolution** (behaviors tasks) — *causes*
  > When addressing tasks involving long-dependency issues, such as summarization... coreference resolution methods demonstrate a clear advantage over other approaches... (Section 5.1)
  - [Bridging Context Gaps: Leveraging Coreference Resolution for Long Contextual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/a1b71d48d4806ecbe5a9e19fa3f10fdc-Paper-Conference.pdf)

### Associated with
- **Prompt understanding** (constructs)
  > while generally robust in classification tasks and generation tasks that mainly rely on prompt understanding (e.g., summarization, chat question-answering), we found that CS models struggle at high-level reasoning and understanding tasks.
  - [SIRIUS : Contexual Sparisty with Correction for Efficient LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/2ae6b2bdf3a179e3e24129e2c54bd871-Paper-Conference.pdf)
- **Conditional text generation** (behaviors tasks)
  > This issue arises in typical conditional text generation tasks, such as text summarization and data-to-text generation, where the goal is to produce fluent text based on contextual input. (ABSTRACT)
  - [SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)
- **Verbosity** (constructs)
  > Consider tasks in which the lengths of the responses need to be contained in the range [llow, lhigh] to control verbosity; for example, in summarization tasks (Makino et al., 2019). (Section 6.2)
  - [L3Ms — Lagrange Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/92d3d2a9801211ca3693ccb2faa1316f-Paper-Conference.pdf)
- **Instruction following ability** (constructs)
  > Weaker instruction-following at 128k length. For summarization tasks, the summaries generated by Llama-3.1-70B-Instruct at 128k tokens become longer and often contain details not present in the reference. (Section 7.1)
  - [On Many-Shot In-Context Learning for Long-Context Evaluation](https://aclanthology.org/2025.acl-long.1245.pdf)
- **In-context learning** (constructs)
  > ICL has proven remarkably successful in handling complex tasks, including summarization (Jain et al., 2023; Baek et al., 2024) and reasoning (Wang et al., 2024a; Lee et al., 2024; Chen et al., 2024b). (Section 2)
  - [MAPLE: Many-Shot Adaptive Pseudo-Labeling for In-Context Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25bo/chen25bo.pdf)
- **Adaptability** (constructs)
  > Li et al. (2024) investigates the factors that play a role in domain adaptation for text summarization.
  - [DA-Pred: Performance Prediction for Text Summarization under Domain-Shift and Instruct-Tuning](https://aclanthology.org/2025.emnlp-main.387.pdf)
- **Language modeling ability** (constructs)
  > To assess whether our IDK-tuning might harm other different downstream language skills... we evaluate the IDK-tuned Mistral-7B-v0.1 on the task of text summarization
  - [I Don't Know: Explicit Modeling of Uncertainty with an [IDK] Token](https://proceedings.neurips.cc/paper_files/paper/2024/file/14c018d2e72c521605b0567029ef0efb-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks)
  > Instruction Following: four tasks to paraphrase, simplify, summarize, or generate stories
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Named entity recognition** (behaviors tasks)
  > It is commonly accepted that the summarization task, at least in the news domain, requires NER skills to be performed effectively.
  - [Statistical Deficiency for Task Inclusion Estimation](https://aclanthology.org/2025.acl-long.18.pdf)
