# Machine translation
**Type:** Behavior  
**Referenced in:** 216 papers  
**Also known as:** Translation, Classical Chinese to modern Chinese translation, Modern Chinese to classical Chinese translation, Ancient poetry translation, Ancient poetry to English translation, Zero-shot translation, Legal translation, Context-dependent translation, Document translation, Concise translation, Monotonic translation, Self-translation, Pronoun translation, Proper noun translation, Language translation, Text translation, Dictionary-based translation, Gender-neutral translation, Lyrics translation, Text-only translation, Domain-specific translation, Cross-lingual generation, Multi-domain translation, Code-switched translation, Explicit translation, Spoken-only language translation, Paragraph-level translation, Pseudo-document translation, Sentence translation, Loanword translation, Braille-to-text translation, Gendered translation, Classical Chinese poetry translation, Cross-cultural translation, Multi-hop translation, Single-hop translation, Plain-text translation, Translation generation, Chain-of-thought translation, Neural Machine Translation, In-context translation, Many-to-many multilingual translation  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is direct source-to-target text conversion: a model generates a target-language sentence or text from a source-language sentence or text. Success is usually described as semantic equivalence or meaning preservation, and some definitions add fluency, adequacy, or natural sentence structure. A smaller line of work treats it as both a held-in and a generation task, or elicits it with an explicit prompt template that asks the model to translate from a named source language to a named target language.

**Variants.** A recurring variant is sentence-level translation, often bidirectional or multilingual, including low-resource settings and English-to-X or X-to-English directions. Papers also study document, paragraph, and pseudo-document translation, plus context-sensitive subproblems such as pronoun, proper noun, and context-dependent translation. Smaller lines of work examine zero-shot, in-context, dictionary-based, self-translation, monotonic and concise simultaneous translation, and domain-specific forms such as legal, finance, multi-domain, or cross-cultural translation. Modality- or format-specific variants include text-in-image, document-image plain-text, spoken-only IPA, Braille-to-text, lyrics, code-switched, gender-neutral or gendered, classical Chinese and poetry, and synthetic single-hop or multi-hop translation; one paper claims a causal relationship from chain of thought to machine translation because multi-hop translation accuracy approaches 0% when CoT is disabled.

**Space of elicitation and scores.** Papers link it to 20 measurement instruments. The most frequently linked are FLORES-200, FLORES, Flores-101, WMT16, and IWSLT 2017; the remaining instruments are other translation benchmarks, corpora, and evaluator setups. Elicitation is usually direct source-to-target prompting or seq2seq translation evaluation, and scoring is commonly reported with BLEU or SacreBLEU, with some papers also using BLEURT, XComet-XL, task-specific accuracy measures such as APT, or fine-grained quality annotations and LLM judging.

**What it is taken as evidence of.** Across the 5 linked constructs, the most recurrent construct link is cross-lingual generalization: one paper explicitly treats cross-lingual generalization as measured by machine translation. The construct links otherwise vary: one paper claims a causal relationship from cross-lingual alignment to machine translation, another claims a causal relationship from cross-lingual generalization to machine translation, machine translation is reported to correlate with translation quality, and it is related to naturalness and stereotyping. Papers therefore do not converge on a single construct framing beyond the recurring link to cross-lingual generalization.

## Sources

**[A Benchmark for Learning to Translate a New Language from One Grammar Book](https://proceedings.iclr.cc/paper_files/paper/2024/file/52d63f9e4b81f866bf69fb3c834aad47-Paper-Conference.pdf)**
> Translating text from one language to another, evaluated as both a held-in and generation task.

**[CriticEval: Evaluating Large-scale Language Model as Critic](https://proceedings.neurips.cc/paper_files/paper/2024/file/7b7d7985f62284060d65f532ed2ea5fa-Paper-Conference.pdf) (as "Translation")**
> The task of converting text from a source language to a target language.

**[WenMind: A Comprehensive Benchmark for Evaluating Large Language Models in Chinese Classical Literature and Language Arts](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c1019b5711474ae5627dc8580614e01-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Classical Chinese to modern Chinese translation")**
> The task of translating a given text from classical Chinese into modern Chinese.

**[WenMind: A Comprehensive Benchmark for Evaluating Large Language Models in Chinese Classical Literature and Language Arts](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c1019b5711474ae5627dc8580614e01-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Modern Chinese to classical Chinese translation")**
> The task of translating a given text from modern Chinese into classical Chinese.

**[WenMind: A Comprehensive Benchmark for Evaluating Large Language Models in Chinese Classical Literature and Language Arts](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c1019b5711474ae5627dc8580614e01-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Ancient poetry translation")**
> The task of translating ancient poetry into modern Chinese while preserving its meaning and sentiment.

**[WenMind: A Comprehensive Benchmark for Evaluating Large Language Models in Chinese Classical Literature and Language Arts](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c1019b5711474ae5627dc8580614e01-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Ancient poetry to English translation")**
> The task of translating ancient Chinese poetry into English.

**[Transformers to SSMs: Distilling Quadratic Knowledge to Subquadratic Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3848fef259495bfd04d60cdc5c1b4db7-Paper-Conference.pdf) (as "Zero-shot translation")**
> Translating text from a source language to a target language without any explicit training examples for that language pair.

**[LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Legal translation")**
> Translating legal texts between Chinese and English.

**[DelTA: An Online Document-Level Translation Agent Based on Multi-Level Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/285149554f6fbed6e2f9ec72d131bd23-Paper-Conference.pdf) (as "Context-dependent translation")**
> The task of translating ambiguous words or phrases that require surrounding text or discourse context for correct interpretation.

**[DelTA: An Online Document-Level Translation Agent Based on Multi-Level Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/285149554f6fbed6e2f9ec72d131bd23-Paper-Conference.pdf) (as "Document translation")**
> Generating a target language version of a source document, often sentence-by-sentence.

**[Language Imbalance Driven Rewarding for Multilingual Self-improving](https://proceedings.iclr.cc/paper_files/paper/2025/file/6cdee7247c410907b32fcbc12a605823-Paper-Conference.pdf) (as "Self-translation")**
> The task of a model translating its own generated responses from one language to another.

**[SimulPL: Aligning Human Preferences in Simultaneous Machine Translation](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c5111676c19e5945473acf20ad7026f-Paper-Conference.pdf) (as "Monotonic translation")**
> The behavior of generating a translation where the target word order largely follows the source word order, minimizing reordering.

**[SimulPL: Aligning Human Preferences in Simultaneous Machine Translation](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c5111676c19e5945473acf20ad7026f-Paper-Conference.pdf) (as "Concise translation")**
> The behavior of producing translations that are shorter than a literal rendering and focus on essential information points.

**[DelTA: An Online Document-Level Translation Agent Based on Multi-Level Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/285149554f6fbed6e2f9ec72d131bd23-Paper-Conference.pdf) (as "Pronoun translation")**
> The observable task of correctly translating pronouns, which often requires resolving coreferences using document-level context.

**[DelTA: An Online Document-Level Translation Agent Based on Multi-Level Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/285149554f6fbed6e2f9ec72d131bd23-Paper-Conference.pdf) (as "Proper noun translation")**
> The specific sub-task of translating named entities such as people, locations, and organizations from a source to a target language.

**[On Exact Bit-level Reversible Transformers Without Changing Architecture](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25ao/zhang25ao.pdf) (as "Language translation")**
> Translating text from one language to another, specifically English to French in the paper's experiment.

**[Can We Predict Performance of Large Models across Vision-Language Tasks?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhao25y/zhao25y.pdf) (as "Text translation")**
> The task of translating text found within an image from one language to another.

**[SLoW: Select Low-frequency Words! Automatic Dictionary Selection for Translation on Large Language Models](https://aclanthology.org/2025.emnlp-main.46.pdf) (as "Dictionary-based translation")**
> Producing translated text by incorporating external bilingual dictionaries into the prompt to guide word-level mappings during generation.

**[MAVL: A Multilingual Audio-Video Lyrics Dataset for Animated Song Translation](https://aclanthology.org/2025.emnlp-main.689.pdf) (as "Lyrics translation")**
> Producing translated lyric text from source lyrics, often under constraints of meaning, rhythm, and singability.

**[Mind the Inclusivity Gap: Multilingual Gender-Neutral Translation Evaluation with mGeNTE](https://aclanthology.org/2025.emnlp-main.692.pdf) (as "Gender-neutral translation")**
> The task of translating text into a target language using unmarked forms that do not specify gender, especially when the source text is ambiguous or refers to unspecified individuals.

**[SHIFT: Selected Helpful Informative Frame for Video-guided Machine Translation](https://aclanthology.org/2025.emnlp-main.161.pdf) (as "Text-only translation")**
> Producing a translated output using only the source text as input, without any visual context.

**[FilBench: Can LLMs Understand and Generate Filipino?](https://aclanthology.org/2025.emnlp-main.127.pdf) (as "Domain-specific translation")**
> Translating text from a specialized domain into another language.

**[AlignX: Advancing Multilingual Large Language Models with Multilingual Representation Alignment](https://aclanthology.org/2025.emnlp-main.328.pdf) (as "Cross-lingual generation")**
> Producing text in a target language based on input in a different source language, such as translating from Arabic to English or vice versa.

**[DMDTEval: An Evaluation and Analysis of LLMs on Disambiguation in Multi-domain Translation](https://aclanthology.org/2025.emnlp-main.309.pdf) (as "Multi-domain translation")**
> Translating text between languages while correctly handling words whose meanings vary across different domains such as law, science, or news.

**[MultiMed-ST: Large-scale Many-to-many Multilingual Medical Speech Translation](https://aclanthology.org/2025.emnlp-main.599.pdf) (as "Code-switched translation")**
> The observable behavior of translating sentences where terms from a foreign language (e.g., English) are retained within the source text of another language.

**[Paths Not Taken: Understanding and Mending the Multilingual Factual Recall Pipeline](https://aclanthology.org/2025.emnlp-main.762.pdf) (as "Explicit translation")**
> Translating an English word or answer into a specified target language when directly prompted to do so.

**[Can Large Language Models Translate Spoken-Only Languages through International Phonetic Transcription?](https://aclanthology.org/2025.emnlp-main.1195.pdf) (as "Spoken-only language translation")**
> The observable task of generating a translation in a written high-resource language from an input sentence that is represented using the International Phonetic Alphabet (IPA) from a spoken-only language.

**[BOUQuET : dataset, Benchmark and Open initiative for Universal Quality Evaluation in Translation](https://aclanthology.org/2025.emnlp-main.1400.pdf) (as "Paragraph-level translation")**
> Translating entire paragraphs of text, which requires maintaining context and coherence beyond individual sentences.

**[AFRIDOC-MT: Document-level MT Corpus for African Languages](https://aclanthology.org/2025.emnlp-main.1413.pdf) (as "Pseudo-document translation")**
> An observable task where a long document is split into fixed-size chunks of sentences, which are then translated as single units.

**[AFRIDOC-MT: Document-level MT Corpus for African Languages](https://aclanthology.org/2025.emnlp-main.1413.pdf) (as "Sentence translation")**
> Translating individual sentences in isolation, without leveraging or preserving inter-sentential context.

**[Leveraging Loanword Constraints for Improving Machine Translation in a Low-Resource Multilingual Context](https://aclanthology.org/2025.emnlp-main.1406.pdf) (as "Loanword translation")**
> The observable act of translating a loanword from the source language into its correct target-language equivalent, respecting orthographic and phonological norms.

**[BrailleLLM: Braille Instruction Tuning with Large Language Models for Braille Domain Tasks](https://aclanthology.org/2025.emnlp-main.1454.pdf) (as "Braille-to-text translation")**
> The observable task of converting a sequence of Braille symbols into its corresponding plain text representation.

**[Assumed Identities: Quantifying Gender Bias in Machine Translation of Gender-Ambiguous Occupational Terms](https://aclanthology.org/2025.emnlp-main.1640.pdf) (as "Gendered translation")**
> The observable act of assigning a masculine or feminine grammatical form to an occupation in translation when the source term is gender-ambiguous.

**[Benchmarking LLMs for Translating Classical Chinese Poetry: Evaluating Adequacy, Fluency, and Elegance](https://aclanthology.org/2025.emnlp-main.1678.pdf) (as "Classical Chinese poetry translation")**
> Producing English translations of classical Chinese poems while preserving meaning, rhyme, structure, and aesthetic qualities.

**[DIWALI - Diversity and Inclusivity aWare cuLture specific Items for India: Dataset and Assessment of LLMs for Cultural Text Adaptation in Indian Context](https://aclanthology.org/2025.emnlp-main.1706.pdf) (as "Cross-cultural translation")**
> The task of translating text from a source language to a target language while also adapting culture-specific entities to ensure relevance and comprehension for the target audience.

**[SYNC: A Synthetic Long-Context Understanding Benchmark for Controlled Comparisons of Model Capabilities](https://aclanthology.org/2025.emnlp-main.1707.pdf) (as "Multi-hop translation")**
> Given a source text and intermediate bilingual dictionaries, the model translates across multiple synthetic languages.

**[SYNC: A Synthetic Long-Context Understanding Benchmark for Controlled Comparisons of Model Capabilities](https://aclanthology.org/2025.emnlp-main.1707.pdf) (as "Single-hop translation")**
> Given a source text in one synthetic language, the model translates it into another language using a direct bilingual dictionary.

**[Single-to-mix Modality Alignment with Multimodal Large Language Model for Document Image Machine Translation](https://aclanthology.org/2025.acl-long.606.pdf) (as "Plain-text translation")**
> Translating the textual content of a document image after removing non-textual elements like formulas and tables, focusing on linguistic accuracy.

**[Enhancing Machine Translation with Self-Supervised Preference Data](https://aclanthology.org/2025.acl-long.1165.pdf) (as "Translation generation")**
> The observable task of producing a target language text given a source language text as input.

**[DMDTEval: An Evaluation and Analysis of LLMs on Disambiguation in Multi-domain Translation](https://aclanthology.org/2025.emnlp-main.309.pdf) (as "Chain-of-thought translation")**
> Producing a translation by first reasoning through the input in steps, such as reading the sentence and then translating it.

**[MBR and QE Finetuning: Training-time Distillation of the Best and Most Expensive Decoding Methods](https://proceedings.iclr.cc/paper_files/paper/2024/file/ae817e85f71ef86d5c9566598e185b89-Paper-Conference.pdf) (as "Neural Machine Translation")**
> The task of automatically translating text from a source language to a target language using a neural network model.

**[Multilingual Machine Translation with Open Large Language Models at Practical Scale: An Empirical Study](https://aclanthology.org/2025.naacl-long.280.pdf) (as "In-context translation")**
> The observable behavior of generating a translation for a source sentence when provided with a few example translation pairs in the context.

**[Multilingual Machine Translation with Open Large Language Models at Practical Scale: An Empirical Study](https://aclanthology.org/2025.naacl-long.280.pdf) (as "Many-to-many multilingual translation")**
> Translating between any pair of 28 supported languages in both directions, including non-English and non-Chinese pivot translations.

## Relationships

### Machine translation →
- **FLORES-200** (measurements) — *measured_by*
  > Translating text from a non-English language to English: We carry out these evaluations in a 5-shot in-context learning paradigm on the FLORES-200 (Costa-juss`a et al., 2022) dataset. (Section 4.2)
  - [LLM Augmented LLMs: Expanding Capabilities through Composition](https://proceedings.iclr.cc/paper_files/paper/2024/file/008a16ead32f932b711788c276890456-Paper-Conference.pdf)
- **FLORES** (measurements) — *measured_by*
  > For MT of English to non-English (en-xx) and non-English to English (xx-en), we use FLORES (Goyal et al., 2022; NLLB Team et al., 2022) as it supports all the languages that we experiment with. (Section 5.4)
  - [Adapters for Altering LLM Vocabularies: What Languages Benefit the Most?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab5492f57995409351cbf1a1cdf5f1a4-Paper-Conference.pdf)
- **Flores-101** (measurements) — *measured_by*
  > In Table 10, we used the translation dataset Flores-101 [Fan et al., 2021] as the evaluation set (Section A.5)
  - [MindMerger: Efficiently Boosting LLM Reasoning in non-English Languages](https://proceedings.neurips.cc/paper_files/paper/2024/file/3bf80b34f731313b8292f4578e820c90-Paper-Conference.pdf)
- **WMT16** (measurements) — *measured_by*
  > and also the Romanian–English and German–English pairs from the WMT16 workshop (Bojar et al., 2016). (Section 4.3)
  - [BERTs are Generative In-Context Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/04ea184dfb5f1babb78c093e850a83f9-Paper-Conference.pdf)
- **IWSLT 2017** (measurements) — *measured_by*
  > This section provides an analysis of the correlation between text evaluation and established metrics using two datasets: the CNN/Daily Mail dataset (Nallapati et al., 2016) for text summarization and the IWSLT 2017 dataset (Cettolo et al., 2017) for text translation. (Section 4.2)
  - [Language Model Self-improvement by Reinforcement Learning Contemplation](https://proceedings.iclr.cc/paper_files/paper/2024/file/d5a655b8b373737b4f2aea8f78e5e754-Paper-Conference.pdf)
- **WMT14** (measurements) — *measured_by*
  > we use the French–English pair from the outdated 2014 shared task at the Workshop on Statistical Machine Translation (WMT14; Bojar et al., 2014) (Section 4.3)
  - [BERTs are Generative In-Context Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/04ea184dfb5f1babb78c093e850a83f9-Paper-Conference.pdf)
- **WMT** (measurements) — *measured_by*
  > "WMT for machine translation"
  - [The Trickle-down Impact of Reward Inconsistency on RLHF](https://proceedings.iclr.cc/paper_files/paper/2024/file/8c976a95df6a229551cd28c76627edc9-Paper-Conference.pdf)
- **WMT14 en-de** (measurements) — *measured_by*
  > Specially, we adopt WMT14 English-German (En-De) and WMT19 English-Chinese (En-Zh) (Kocmi et al., 2022) for translation. (Section 2)
  - [When Scaling Meets LLM Finetuning: The Effect of Data, Model and Finetuning Method](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2ad28981782bb62f025d2893791b629-Paper-Conference.pdf)
- **WMT14 De-En** (measurements) — *measured_by*
  > We selected CNN/DM, GSM8K, Alpaca (Taori et al., 2023), WMT14 DE-EN, and Nature Questions (Kwiatkowski et al., 2019) for the evaluation on summarization, reasoning, instruction following, translation, and question answering tasks, respectively. (Section 5.3)
  - [SWIFT: On-the-Fly Self-Speculative Decoding for LLM Inference Acceleration](https://proceedings.iclr.cc/paper_files/paper/2025/file/d74d002a9154b4cc433a234feb27c5f4-Paper-Conference.pdf)
- **WMT19** (measurements) — *measured_by*
  > We use WMT14 (Bojar et al., 2014), IWSLT14 (Cettolo et al., 2014), afroMT (Reid et al., 2021), IWSLT17 (Cettolo et al., 2017), WMT18 (Bojar et al., 2018), and WMT19 (Barrault et al., 2019) for machine translation (Section 4.1)
  - [Uncertainty-Aware Decoding with Minimum Bayes Risk](https://proceedings.iclr.cc/paper_files/paper/2025/file/1588dc2b2ef339d6e4c47d212e36f991-Paper-Conference.pdf)
- **NTREX-128** (measurements) — *measured_by*
  > “Generation (GN) Document translation NTREX-128 (Federmann et al., 2022)”
  - [FilBench: Can LLMs Understand and Generate Filipino?](https://aclanthology.org/2025.emnlp-main.127.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > We evaluate on tasks selected from BIG-Bench Hard (BBH) [43], a collection of diverse tasks considered to be challenging to LLMs ... the tasks include numerical reasoning, commonsense problem-solving, logical deduction, linguistic manipulation, machine translation, and tabular reasoning, among others. (Section 3.1)
  - [Teach Better or Show Smarter? On Instructions and Exemplars in Automatic Prompt Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/6b031defd145b02bed031093d8797bb3-Paper-Conference.pdf)
- **COMETKIWI** (measurements) — *measured_by*
  > “we consider two reranking strategies: selecting the best candidate with MBR decoding using COMET-22 as the utility metric ... and reranking based on quality estimation using the reference-free CometKiwi”
  - [Reranking Laws for Language Generation: A Communication-Theoretic Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/c8b2f897e45770595656a79a9ad91e89-Paper-Conference.pdf)
- **Spec-Bench** (measurements) — *measured_by*
  > The benchmark includes various generation subtasks including... translation
  - [Block Verification Accelerates Speculative Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e710b42b1a9ed898f607ec0f4fcc971-Paper-Conference.pdf)
- **WMT18** (measurements) — *measured_by*
  > We use WMT14 (Bojar et al., 2014), IWSLT14 (Cettolo et al., 2014), afroMT (Reid et al., 2021), IWSLT17 (Cettolo et al., 2017), WMT18 (Bojar et al., 2018), and WMT19 (Barrault et al., 2019) for machine translation (Section 4.1)
  - [Uncertainty-Aware Decoding with Minimum Bayes Risk](https://proceedings.iclr.cc/paper_files/paper/2025/file/1588dc2b2ef339d6e4c47d212e36f991-Paper-Conference.pdf)
- **XNLI** (measurements) — *measured_by*
  > Machine translation uses the XNLI (Conneau et al., 2018) parallel corpus for 15 languages... (Section 3.3)
  - [Heads up! Large Language Models Can Perform Tasks Without Your Instruction via Selective Attention Head Masking](https://raw.githubusercontent.com/mlresearch/v267/main/assets/han25l/han25l.pdf)
- **MQM** (measurements) — *measured_by*
  > "we focus on the setting of machine translation, an application where substantial amounts of fine-grained information is already readily available, namely Multidimensional Quality Metrics (MQM) data"
  - [Learning from others’ mistakes: Finetuning machine translation models with span-level error annotations](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25p/zhang25p.pdf)
- **LoraxBench** (measurements) — *measured_by*
  > We introduce LORAXBENCH, a benchmark that focuses on low-resource languages of Indonesia and covers 6 diverse tasks: reading comprehension, open-domain QA, language inference, causal reasoning, translation, and cultural QA. (Abstract)
  - [LORAXBENCH: A Multitask, Multilingual Benchmark Suite for 20 Indonesian Languages](https://aclanthology.org/2025.emnlp-main.881.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > Table 2 shows that large language models effectively evaluate classical Chinese poetry translation... (Section 7.1)
  - [Benchmarking LLMs for Translating Classical Chinese Poetry: Evaluating Adequacy, Fluency, and Elegance](https://aclanthology.org/2025.emnlp-main.1678.pdf)
- **WMT24++** (measurements) — *measured_by*
  > We use the WMT24++ (Deutsch et al., 2025) dataset as our test set
  - [Please Translate Again: Two Simple Experiments on Whether Human-Like Reasoning Helps Translation](https://aclanthology.org/2025.emnlp-main.1031.pdf)

### → Machine translation
- **Cross-lingual alignment** (constructs) — *causes*
  > We present cross-lingual attention alignment of the ﬁnetuned models across Mufu input as a mechanistic explanation of the improvement in translation performance.
  - [Mufu:  Multilingual Fused Learning for Low-Resource Translation with LLM](https://proceedings.iclr.cc/paper_files/paper/2025/file/b44ae90136013a8d0e2d24f6015b6097-Paper-Conference.pdf)
- **Chain of thought** (behaviors tasks) — *causes*
  > both models approach 0% accuracy on multi-hop translations when CoT is disabled, indicating the necessity of CoT on SYNC.
  - [SYNC: A Synthetic Long-Context Understanding Benchmark for Controlled Comparisons of Model Capabilities](https://aclanthology.org/2025.emnlp-main.1707.pdf)

### Associated with
- **OPUS-100** (measurements)
  > For multilingual translation, we train a single model for eight directions en-{es,fa,fr,it,ko,ru,tr,zh} from the opus-100 corpus (Zhang et al., 2020) using 1M parallel sentences for each direction. (Section 5.1)
  - [Error Norm Truncation: Robust Training in the Presence of Data Noise for Text Generation Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/3640a1997a4c9571cea9db2c82e1fc35-Paper-Conference.pdf)
- **Text generation** (behaviors tasks)
  > Tasks at the Generation level require LLMs to generate legal texts with given requirements and formats. We construct four tasks at this level: ...Legal Translation (5-3)... (Section C.3.5)
  - [LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Stereotyping** (constructs)
  > Machine Translation systems have become indispensable tools for cross-linguistic communication, yet they frequently exhibit gender biases that reinforce societal stereotypes (Blodgett et al., 2020; Menis-Mastromichalakis et al., 2025). (Section 1)
  - [Assumed Identities: Quantifying Gender Bias in Machine Translation of Gender-Ambiguous Occupational Terms](https://aclanthology.org/2025.emnlp-main.1640.pdf)
- **Cross-lingual generalization** (constructs)
  > We conducted continued pre-training of open-source LLMs using corpora obtained through various transliteration methods, analyzed cross-lingual transfer performance across text classification, named entity recognition, machine reading comprehension, knowledge extraction, and machine translation tasks (Section 1).
  - [Enhancing Cross-Lingual Transfer through Reversible Transliteration: A Huffman-Based Approach for Low-Resource Languages](https://aclanthology.org/2025.acl-long.795.pdf)
- **State tracking** (behaviors tasks)
  > A more challenging task, Multi-hop Translation, further requires the model to perform a sequence of translations across multiple languages. ... the model must correctly apply consecutive bilingual dictionaries while keeping track of the translated outputs across the intermediate languages.
  - [SYNC: A Synthetic Long-Context Understanding Benchmark for Controlled Comparisons of Model Capabilities](https://aclanthology.org/2025.emnlp-main.1707.pdf)
