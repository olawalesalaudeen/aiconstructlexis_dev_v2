# Molecular understanding
**Type:** Construct  
**Referenced in:** 4 papers  
**Also known as:** Chemical understanding, 3D molecular understanding, Cross-modal molecular understanding, 3D molecule-text interpretation  

## State of the Field

**Definition agreement:** Complementary. All papers treat molecular understanding as a model's latent grasp of molecular or chemical structure and concepts, but they foreground different modalities and manifestations of that grasp. One gives a broad definition from molecular representations, while the others narrow it to handling molecular text and nomenclature or interpreting 3D geometry for question answering or description, so they describe compatible aspects rather than the exact same scope.

**Space of definitions.** Across the papers, the common thread is a latent model ability to understand molecular structures and related chemical information, whether from general molecular representations, molecular text, or 3D geometry. One broad framing describes comprehension of molecular properties, functions, and structures from representations, while another emphasizes "fine-grained chemical understanding" in molecular text, including concepts, structures, nomenclature, and numerical, structural, and semantic aspects of chemical information. A separate line specializes the construct to 3D and cross-modal molecule-text settings, describing the ability to interpret 3D molecular structures, answer questions or generate descriptions from geometry, and align structural data with natural language.

**Space of facets.** Papers do not present a single taxonomy, but they repeatedly subdivide the construct by modality and granularity. One line uses the neighboring labels "3D molecular understanding," "cross-modal molecular understanding," and "3D molecule-text interpretation" for abilities centered on 3D geometry, molecule-text alignment, and text generation about structure, while another treats chemical understanding as fine-grained performance over numerical, structural, and semantic aspects of chemical information. In this usage, instruction following is discussed alongside molecular understanding rather than folded into it.

**Space of measurement.** Operationalization is sparse: the construct is linked to one measurement instrument and one behavioral indicator. The only linked instrument is the benchmark MOLERR2FIX, which is described as emphasizing fine-grained chemical understanding rather than molecule-to-text generation or property prediction, and as assessing depth of understanding across numerical, structural, and semantic aspects of chemical information. The only linked behavioral indicator is molecular property prediction, but it appears through a claimed causal link rather than as a direct measurement instrument, so the linked measurement coverage is narrower than the range of definitions that also stress 3D geometry and cross-modal molecule-text interpretation.

**Links.** Only one paper claims a causal relationship from molecular understanding to molecular property prediction, alongside a report of "superior performance in molecular property prediction." No correlational or other related links are reported.

## Sources

**[3D-MolT5: Leveraging Discrete Structural Information for Molecule-Text Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/3d4dc72d715bd6415d356293079adf3d-Paper-Conference.pdf)**
> The latent ability of a model to comprehend the properties, functions, and structures of molecules from their representations.

**[MolErr2Fix: Benchmarking LLM Trustworthiness in Chemistry via Modular Error Detection, Localization, Explanation, and Correction](https://aclanthology.org/2025.emnlp-main.977.pdf) (as "Chemical understanding")**
> The depth of a model's grasp of chemical concepts, structures, and nomenclature as reflected in its handling of molecular text.

**[Towards 3D Molecule-Text Interpretation in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/4af24e6ce753c181e703f3f0be3b5e20-Paper-Conference.pdf) (as "3D molecular understanding")**
> The latent ability to interpret molecular structures from 3D geometry and use that information to answer questions or generate descriptions.

**[Towards 3D Molecule-Text Interpretation in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/4af24e6ce753c181e703f3f0be3b5e20-Paper-Conference.pdf) (as "Cross-modal molecular understanding")**
> The ability to align and reason across molecular structural data and natural language descriptions, enabling coherent interpretation of molecules in both modalities.

**[Towards 3D Molecule-Text Interpretation in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/4af24e6ce753c181e703f3f0be3b5e20-Paper-Conference.pdf) (as "3D molecule-text interpretation")**
> The latent ability of a language model to understand and reason about 3D molecular structures through textual input and output, integrating spatial conformation with semantic meaning.
